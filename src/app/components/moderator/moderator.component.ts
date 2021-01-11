import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
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
  templateUrl: "./moderator.component.html"
})
export class ModeratorComponent implements OnInit, AfterViewInit {
  @ViewChild("video", { static: false })
  private readonly videoRef: ElementRef;

  @ViewChild("incomingVideo", { static: false })
  private readonly incomingVideoRef: ElementRef;

  @ViewChild("incomingAudio", { static: false })
  private readonly incomingAudioRef: ElementRef;

  @ViewChild("incomingVideoScreenShare", { static: false })
  private readonly incomingVideoScreenShareRef: ElementRef;

  private currentUserHtmlElements: {
    video: HTMLVideoElement;
  };

  private clientHtmlElements: {
    audio: HTMLVideoElement;
    video: HTMLVideoElement;
    videoScreenShare: HTMLVideoElement;
  };

  private peerConnections: { [id: string]: RTCPeerConnection } = {};

  private localStream: MediaStream;

  connectedUser: User;

  /**
   * Google server as our stun server
   */
  private readonly configuration: Readonly<RTCConfiguration> = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    // @ts-ignore
    sdpSemantics: "plan-b"
  };

  private receiveAnswer(data: UserSocketMessage): void {
    console.log(`recieveAnswer ${data.streamType} ${data.user.id}`);

    const payload: RTCSessionDescription = data.payload as RTCSessionDescription;
    this.peerConnections[data.user.id].setRemoteDescription(payload);
  }

  private receiveOffer(socket: WebSocket, data: UserSocketMessage): void {
    console.log(`recieveOffer ${data.streamType} ${data.user.id}`);
    const payload = data.payload as RTCSessionDescription;

    this.peerConnections[data.user.id]
      .setRemoteDescription(payload)
      .then(() => this.peerConnections[data.user.id].createAnswer())
      .then(sdp => this.peerConnections[data.user.id].setLocalDescription(sdp))
      .then(() => {
        console.log(`recieveOffer send sdp ${data.streamType} ${data.user.id}`);
        this.sendSocketMessage(socket, data.user.id, {
          payload: this.peerConnections[data.user.id].localDescription,
          streamType: data.streamType,
          type: data.type
        });
      });
  }

  constructor() {}

  ngOnInit() {
    const user = new User("moderator");
    this.displayMyStream().then(() => {
      const socket = new WebSocket(
        `${environment.webSocketUrl}?userId=${user.id}&userType=${user.type}`
      );

      this.connectedUser = user;

      socket.onopen = (event: MessageEvent) => {
        console.log("Connection Established", event);
        this.sendPing(socket);
      };

      socket.onmessage = (event: MessageEvent) => {
        const data: UserSocketMessage = JSON.parse(event.data);

        console.log("Message received", data);

        if (data.type === "UserJoined") {
          // Someone joined the stream
          const userJoinedSocketMessage = data as UserJoinedSocketMessage;
          this.onUserJoined(socket, userJoinedSocketMessage.allUsers);
        } else if (data.type === "UserLeft") {
          // Someone left the stream
          this.removeUserFromStream(data.user.id);
        } else {
          this.gotMessageFromServer(socket, data);
        }
      };

      socket.onclose = (event: CloseEvent) => {
        console.log("Connection Closed");
        this.onConnectionClosed();
      };

      window.onunload = window.onbeforeunload = () => {
        socket.close();
      };
    });
  }

  private onConnectionClosed(): void {
    // Close Camera & Audio peer connection
    for (let key in this.peerConnections) {
      this.peerConnections[key].close();
      delete this.peerConnections[key];
    }

    // Clear associated html elements
  }

  private onUserJoined(webSocket: WebSocket, allUsers: User[]): void {
    allUsers.forEach(user => {
      //
      if (user.id === this.connectedUser.id) return;

      //
      if (!this.peerConnections[user.id]) {
        console.log(`creating peer connection ${user.id}`);
        this.peerConnections[user.id] = new RTCPeerConnection(
          this.configuration
        );

        console.log(`onicecandidate ${user.id}`);
        this.peerConnections[user.id].onicecandidate = iceEvent => {
          if (iceEvent.candidate) {
            this.sendSocketMessage(webSocket, user.id, {
              payload: iceEvent.candidate,
              streamType: "video",
              type: "IceCandidate"
            });
          }
        };

        if (user.type === "client") {
          console.log(`ontrack ${user.id}`);
          var counter = 0;

          //@ts-ignore
          this.peerConnections[user.id].ontrack = event => {
            console.log("streaming their video here");

            let stream: MediaStream;
            if (event.streams && event.streams[0]) {
              stream = event.streams[0];
            } else {
              console.log("nothing to stream");
              return;
            }

            if (stream.getAudioTracks().length) {
              this.clientHtmlElements.audio.srcObject = stream;
              if (stream.getVideoTracks().length) {
                this.clientHtmlElements.video.srcObject = stream;
                counter = 1;
              }
            } else {
              if (++counter == 2) {
                this.clientHtmlElements.videoScreenShare.srcObject = stream;
                counter = 0;
              } else {
                this.clientHtmlElements.video.srcObject = stream;
              }
            }
          };
        }

        console.log(`addtrack localstream ${user.id}`);
        // Send local stream to peer
        this.localStream
          .getTracks()
          .forEach(track =>
            this.peerConnections[user.id].addTrack(track, this.localStream)
          );

        // Video
        if (user.type === "observer") {
          this.peerConnections[user.id].onnegotiationneeded = () => {
            this.peerConnections[user.id]
              .createOffer()
              .then(description =>
                this.peerConnections[user.id].setLocalDescription(description)
              )
              .then(() => {
                console.log(`onnegotiationneeded send sdp ${user.id}`);
                this.sendSocketMessage(webSocket, user.id, {
                  payload: this.peerConnections[user.id].localDescription,
                  streamType: "video",
                  type: "SessionDescription"
                });
              });
          };
        }
      }
    });
  }

  private sendPing(
    webSocket: WebSocket) : void {

    setTimeout(() => {
        webSocket.send(JSON.stringify({ type: "PingModo" }));
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
    
    if (this.connectedUser.id === data.user.id) return;

    switch (data.payload.type) {
      case "answer":
        this.receiveAnswer(data);
        break;
      case "offer":
        this.receiveOffer(webSocket, data);
        break;
      case undefined:
        console.log("icecandidate");
        this.peerConnections[data.user.id].addIceCandidate(
          new RTCIceCandidate(data.payload as RTCIceCandidateInit)
        );
        break;
      default:
        console.log("oops", data);
        break;
    }
  }

  ngAfterViewInit(): void {
    this.currentUserHtmlElements = {
      video: this.videoRef.nativeElement
    };

    this.clientHtmlElements = {
      audio: this.incomingAudioRef.nativeElement,
      video: this.incomingVideoRef.nativeElement,
      videoScreenShare: this.incomingVideoScreenShareRef.nativeElement
    };
  }

  private sendSocketMessage(
    webSocket: WebSocket,
    toUserId: string,
    message: SocketMessage
  ): void {
    webSocket.send(
      JSON.stringify({
        ...message,
        user: this.connectedUser,
        toUserId
      })
    );
  }

  private removeUserFromStream(userId: string): void {
    console.log("removing user from stream");
    if (this.peerConnections[userId]) {
      this.peerConnections[userId].close();
      delete this.peerConnections[userId];
    }
  }

  private async displayMyStream(): Promise<any> {
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
    }

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });

      this.currentUserHtmlElements.video.srcObject = this.localStream;
      this.currentUserHtmlElements.video.muted = true;

      return Promise.resolve();
    } catch (err) {
      return this.logError(err, "error displaying stream");
    }
  }

  private logError(err: any, message: string): Promise<void> {
    console.log(err.toString(), err, message);
    return Promise.reject({
      error: err.toString(),
      message
    });
  }
}
