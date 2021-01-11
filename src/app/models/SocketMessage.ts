import { StreamType } from "./types/StreamType";
import { MessageType } from "./types/MessageType";
import { User } from "./User";

export interface SocketMessage {
  streamType: StreamType;

  type: MessageType;

  payload: RTCSessionDescription | RTCIceCandidate;
}

export interface UserSocketMessage extends SocketMessage {
  user: User;
}

export interface UserJoinedSocketMessage extends UserSocketMessage {
  allUsers: User[];
}
