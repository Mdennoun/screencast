import { Injectable } from "@angular/core";
import { UserLogin } from "../models/UserLogin";
import users from "src/assets/users.json";
import { Observable, of } from "rxjs";
import { User } from "../models/User";
import { UserType } from "../models/types/UserType";

@Injectable()
export class UserService {
  constructor() {}

  authenticate(username: string, password: string): Observable<User> {
    const authenticatedUser: UserLogin = users.find(
      (u) => u.username === username && u.password === password
    ) as UserLogin;

    let result: User;
    if (authenticatedUser) {
      let type: UserType = "observer";
      if (authenticatedUser.type === "CLIENT") {
        type = "client";
      } else if (authenticatedUser.type === "MODERATOR") {
        type = "moderator";
      }

      localStorage.setItem("PCKSC:user", JSON.stringify(authenticatedUser));
      result = new User(type);
    }
    return of(result);
  }
}
