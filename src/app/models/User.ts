import { UserType } from "./types/UserType";
import { v4 as uuidv4 } from "uuid";

export class User {
  id: string;

  constructor(public type: UserType) {
    this.id = uuidv4();
  }
}
