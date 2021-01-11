import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit
} from "@angular/core";
import { environment } from "src/environments/environment";
import {
  SocketMessage,
  UserSocketMessage,
  UserJoinedSocketMessage
} from "../../models/SocketMessage";
import { User } from "src/app/models/User";

@Component({
  templateUrl: "./observer.component.html"
})
export class ObserverComponent implements OnInit, AfterViewInit {
  @ViewChild("incomingModeratorVideo", { static: false })
  private readonly incomingModeratorVideoRef: ElementRef;

  @ViewChild("incomingClientAudio", { static: false })
  private readonly incomingClientAudioRef: ElementRef;

  @ViewChild("incomingClientVideo", { static: false })
  private readonly incomingClientVideoRef: ElementRef;

  @ViewChild("incomingClientVideoScreenShare", { static: false })
  private readonly incomingClientVideoScreenShareRef: ElementRef;

  private moderatorHtmlElements: {
    video: HTMLVideoElement;
  };

  private clientHtmlElements: {
    audio: HTMLVideoElement;
    video: HTMLVideoElement;
    videoScreenShare: HTMLVideoElement;
  };

  private moderatorId: string = "";
  private peerConnectionModerator: RTCPeerConnection;

  private clientId: string = "";
  private peerConnectionClient: RTCPeerConnection;

  client: {
    socket: WebSocket;
    user: User;
  };

  /**
   * Google server as our stun server
   */
  private readonly configuration: Readonly<RTCConfiguration> = {
    iceServers: [
      {
        urls: ["stun:stun.l.google.com:19302"]
      }
    ],
    // @ts-ignore
    sdpSemantics: "plan-b"
  };

  constructor() {}

  ngOnInit() {
    const user = new User("observer");

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

        this.onUserJoined(
          userJoinedSocketMessage.allUsers,
          userJoinedSocketMessage.user.id
        );
      } else if (data.type === "UserLeft") {
        // Someone left the stream
        this.removeUserFromStream(data.user.id);
      } else {
        this.gotMessageFromServer(socket,data);
      }
    };

    socket.onclose = (event: CloseEvent) => {
      console.log("Connection Closed");
      this.onConnectionClosed();
    };

    window.onunload = window.onbeforeunload = () => {
      socket.close();
    };
  }

  private onConnectionClosed(): void {
    // Close Camera & Audio peer connection
    if (this.peerConnectionModerator) {
      this.peerConnectionModerator.close();
      delete this.peerConnectionModerator;
      this.moderatorHtmlElements.video.srcObject = null;
    }

    if (this.peerConnectionClient) {
      this.peerConnectionClient.close();
      delete this.peerConnectionClient;
      this.clientHtmlElements.video.srcObject = null;
      this.clientHtmlElements.videoScreenShare.srcObject = null;
    }

    // Clear associated html elements
  }

  private removeUserFromStream(userId: string): void {
    console.log("removing user from stream");
    if (userId === this.moderatorId && this.peerConnectionModerator) {
      this.peerConnectionModerator.close();
      delete this.peerConnectionModerator;
    }

    if (userId === this.clientId && this.peerConnectionClient) {
      this.peerConnectionClient.close();
      delete this.peerConnectionClient;
    }
  }

  private receiveOffer(data: UserSocketMessage): void {
    const payload = data.payload as RTCSessionDescription;

    if (data.user.type === "moderator") {
      console.log("receiveOffer moderator");
      this.peerConnectionModerator
        .setRemoteDescription(payload)
        .then(() => this.peerConnectionModerator.createAnswer())
        .then(sdp => this.peerConnectionModerator.setLocalDescription(sdp))
        .then(() => {
          console.log("receiveOffer sendSocketMessage moderator");
          this.sendSocketMessage(data.user.id, {
            payload: this.peerConnectionModerator.localDescription,
            streamType: data.streamType,
            type: data.type
          });
        });
    } else if (data.user.type === "client") {
      // Client
      console.log("receiveOffer client");
      this.peerConnectionClient
        .setRemoteDescription(payload)
        .then(() => this.peerConnectionClient.createAnswer())
        .then(sdp => this.peerConnectionClient.setLocalDescription(sdp))
        .then(() => {
          console.log("receiveOffer sendSocketMessage moderator");
          this.sendSocketMessage(data.user.id, {
            payload: this.peerConnectionClient.localDescription,
            streamType: data.streamType,
            type: data.type
          });
        });
    }
  }
  private sendPing(
    webSocket: WebSocket) : void {

    setTimeout(() => {
        webSocket.send(JSON.stringify({ type: "PingObs" }));
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
      case "offer":
        this.receiveOffer(data);
        break;
      case undefined:
        if (data.user.type === "moderator") {
          console.log("icecandidate moderator");
          this.peerConnectionModerator.addIceCandidate(
            new RTCIceCandidate(data.payload as RTCIceCandidateInit)
          );
        } else if (data.user.type === "client") {
          console.log("icecandidate client");
          this.peerConnectionClient.addIceCandidate(
            new RTCIceCandidate(data.payload as RTCIceCandidateInit)
          );
        }
        break;
    }
  }

  private onUserJoined(allUsers: User[], fromUserId: string): void {
    const moderator = allUsers.find(u => u.type === "moderator");
    if (moderator) {
      this.moderatorId = moderator.id;

      if (!this.peerConnectionModerator) {
        console.log("create peerconnection moderator");
        this.peerConnectionModerator = new RTCPeerConnection(
          this.configuration
        );

        console.log("onicecandidate moderator");
        this.peerConnectionModerator.onicecandidate = iceEvent => {
          console.log("received ICE candidate");
          if (iceEvent.candidate) {
            this.sendSocketMessage(moderator.id, {
              payload: iceEvent.candidate,
              streamType: "video",
              type: "IceCandidate"
            });
          }
        };

        console.log("ontrack moderator");
        this.peerConnectionModerator.ontrack = event => {
          console.log("streaming moderator's video here");

          if (event.streams && event.streams[0]) {
            const stream: MediaStream = event.streams[0];

            this.moderatorHtmlElements.video.srcObject = stream;
          } else {
            console.log("nothing to stream");
          }
        };
      }
    }

    const client = allUsers.find(u => u.type === "client");
    if (client) {
      this.clientId = client.id;

      if (!this.peerConnectionClient) {
        this.peerConnectionClient = new RTCPeerConnection(this.configuration);

        this.peerConnectionClient.onicecandidate = iceEvent => {
          console.log("Sending ice candidate");
          if (iceEvent.candidate) {
            this.sendSocketMessage(client.id, {
              payload: iceEvent.candidate,
              streamType: "video",
              type: "IceCandidate"
            });
          }
        };

        let counter = 0;
        this.peerConnectionClient.ontrack = event => {
          console.log("streaming client's video here");

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

  ngAfterViewInit(): void {
    this.moderatorHtmlElements = {
      video: this.incomingModeratorVideoRef.nativeElement
    };

    this.clientHtmlElements = {
      audio: this.incomingClientAudioRef.nativeElement,
      video: this.incomingClientVideoRef.nativeElement,
      videoScreenShare: this.incomingClientVideoScreenShareRef.nativeElement
    };
  }

  private logError(err: any): void {
    console.log(err.toString(), err);
  }
}
