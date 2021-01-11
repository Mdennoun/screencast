import { UserLoginType } from "./types/UserLoginType";

export interface UserLogin {
  username: string;

  password: string;

  type: UserLoginType;
}
