import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit
} from "@angular/core";
import {
  SocketMessage,
  UserJoinedSocketMessage,
  UserSocketMessage
} from "../../models/SocketMessage";
import { environment } from "src/environments/environment";
import { User } from "src/app/models/User";

@Component({
  templateUrl: "./client.component.html"
})
export class ClientComponent implements OnInit, AfterViewInit {
  @ViewChild("video", { static: false })
  private readonly videoRef: ElementRef;

  @ViewChild("videoScreenShare", { static: false })
  private readonly videoScreenShareRef: ElementRef;

  @ViewChild("incomingVideo", { static: false })
  private readonly incomingVideoRef: ElementRef;

  client: {
    socket: WebSocket;
    user: User;
  };

  private currentUserHtmlElements: {
    video: HTMLVideoElement;
    videoScreenShare: HTMLVideoElement;
  };

  private moderatorHtmlElements: {
    video: HTMLVideoElement;
  };

  private peerConnections: { [id: string]: RTCPeerConnection } = {};

  private localStream: MediaStream;

  private streamScreenShare: MediaStream;

  /**
   * Google server as our stun server
   */
  private readonly configuration: Readonly<RTCConfiguration> = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    // @ts-ignore
    sdpSemantics: "plan-b"
  };

  private receiveAnswer(data: UserSocketMessage): void {
    const payload = data.payload as RTCSessionDescription;
    this.peerConnections[data.user.id].setRemoteDescription(payload);
  }

  private receiveOffer(data: UserSocketMessage): void {
    const payload = data.payload as RTCSessionDescription;

    if (!this.peerConnections[data.user.id]) {
      this.peerConnections[data.user.id] = new RTCPeerConnection(
        this.configuration
      );
    }

    this.peerConnections[data.user.id]
      .setRemoteDescription(payload)
      .then(() => this.peerConnections[data.user.id].createAnswer())
      .then(sdp => this.peerConnections[data.user.id].setLocalDescription(sdp))
      .then(() => {
        this.sendSocketMessage(data.user.id, {
          payload: this.peerConnections[data.user.id].localDescription,
          streamType: data.streamType,
          type: data.type
        });
      });
  }

  constructor() {}

  ngOnInit() {
    const user = new User("client");
    this.displayMyStream(user.id).then(() => {
      const socket = new WebSocket(
        `${environment.webSocketUrl}?userId=${user.id}&userType=${user.type}`
      );
      this.client = {
        socket,
        user
      };

      socket.onopen = (event: MessageEvent) => {
        console.log("Connection Established", event);
        this.sendPing(socket);
      };

      socket.onmessage = (event: MessageEvent) => {
        const data: UserSocketMessage = JSON.parse(event.data);
        console.log("Message received", data);

        // Someone joined the stream
        if (data.type === "UserJoined") {
          // Someone joined the stream
          const userJoinedSocketMessage = data as UserJoinedSocketMessage;
          this.onUserJoined(userJoinedSocketMessage.allUsers);
        } else if (data.type === "UserLeft") {
          this.removeUserFromStream(data.user.id);
        } else {
          this.gotMessageFromServer(socket, data);
        }
      };

      socket.onclose = (event: CloseEvent) => {
        // Close Camera & Audio peer connection
        for (let key in this.peerConnections) {
          this.peerConnections[key].close();
          delete this.peerConnections[key];
        }

        // Clear associated html elements
        console.log("someone left");
      };

      window.onunload = window.onbeforeunload = () => {
        socket.close();
      };
    });
  }
  private sendPing(
    webSocket: WebSocket) : void {

    setTimeout(() => {
        webSocket.send(JSON.stringify({ type: "PingClient" }));
      }, 10000); // in milliseconds
    

  }

  private gotMessageFromServer(
    webSocket: WebSocket,
    data: UserSocketMessage
  ): void {
   
    if (data.type === "Pong") {
      this.sendPing(webSocket);
       return;
     }

    
    if (this.client.user.id === data.user.id) return;

    switch (data.payload.type) {
      case "answer":
        this.receiveAnswer(data);
        break;
      case "offer":
        this.receiveOffer(data);
        break;
      case undefined:
        this.peerConnections[data.user.id].addIceCandidate(
          new RTCIceCandidate(data.payload as RTCIceCandidate)
        );
        break;
      default:
        console.log("oops", data);
        break;
    }
  }

  private onUserJoined(allUsers: User[]): void {
    allUsers.forEach(user => {
      if (user.id === this.client.user.id) return;

      if (!this.peerConnections[user.id]) {
        this.peerConnections[user.id] = new RTCPeerConnection(
          this.configuration
        );

        this.peerConnections[user.id].onicecandidate = iceEvent => {
          if (iceEvent.candidate) {
            this.sendSocketMessage(user.id, {
              payload: iceEvent.candidate,
              streamType: "video",
              type: "IceCandidate"
            });
          }
        };

        if (user.type === "moderator") {
          // @ts-ignore
          this.peerConnections[user.id].ontrack = event => {
            let stream: MediaStream;
            if (event.streams && event.streams[0]) {
              stream = event.streams[0];
            } else {
              console.log("nothing to stream");
              return;
            }

            console.log(`streaming ${stream.id}`);
            this.moderatorHtmlElements.video.srcObject = stream;
          };
        }

        this.peerConnections[user.id].onnegotiationneeded = () => {
          this.peerConnections[user.id]
            .createOffer()
            .then(description =>
              this.peerConnections[user.id].setLocalDescription(description)
            )
            .then(() => {
              this.sendSocketMessage(user.id, {
                payload: this.peerConnections[user.id].localDescription,
                streamType: "video",
                type: "SessionDescription"
              });
            });
        };

        this.localStream
          .getTracks()
          .forEach(track =>
            this.peerConnections[user.id].addTrack(track, this.localStream)
          );

        // Send screencapture stream to peer
        this.streamScreenShare
          .getTracks()
          .forEach(track =>
            this.peerConnections[user.id].addTrack(
              track,
              this.streamScreenShare
            )
          );
      }
    });
  }

  private removeUserFromStream(userId: string): void {
    console.log("removing user from stream");
    if (this.peerConnections[userId]) {
      this.peerConnections[userId].close();
      delete this.peerConnections[userId];
    }
  }

  private sendSocketMessage(toUserId: string, message: SocketMessage): void {
    this.client.socket.send(
      JSON.stringify({
        ...message,
        user: this.client.user,
        toUserId
      })
    );
  }

  private async displayMyStream(userId: string): Promise<any> {
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
    }

    if (this.streamScreenShare) {
      this.streamScreenShare.getTracks().forEach(track => track.stop());
    }

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      this.gotStream(this.currentUserHtmlElements.video, this.localStream);

      // @ts-ignore
      this.streamScreenShare = await navigator.mediaDevices.getDisplayMedia({
        video: true
      });
      this.gotStream(
        this.currentUserHtmlElements.videoScreenShare,
        this.streamScreenShare
      );

      return Promise.resolve();
    } catch (err) {
      return this.logError(
        err,
        "Make sure your microphone or your camera are connected"
      );
    }
  }

  private gotStream(videoElement: HTMLVideoElement, stream: MediaStream): void {
    videoElement.srcObject = stream;
    videoElement.muted = true;
  }

  ngAfterViewInit(): void {
    this.currentUserHtmlElements = {
      video: this.videoRef.nativeElement,
      videoScreenShare: this.videoScreenShareRef.nativeElement
    };

    this.moderatorHtmlElements = {
      video: this.incomingVideoRef.nativeElement
    };
  }

  private logError(err: any, message: string): Promise<void> {
    console.log(err.toString(), err, message);
    return Promise.reject({
      error: err.toString(),
      message
    });
  }
}
