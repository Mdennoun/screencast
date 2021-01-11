import { Component } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "src/app/models/User";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  readonly loginForm: FormGroup;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      username: "",
      password: ""
    });
  }

  onLogin(): void {
    const formValues: LoginFormValues = this.loginForm.value;

    this.userService
      .authenticate(formValues.username, formValues.password)
      .subscribe((result: User) => {
        if (result) {
          switch (result.type) {
            case "moderator":
              this.router.navigate(["/moderator"]);
              break;
            case "client":
              this.router.navigate(["/client"]);
              break;
            case "observer":
              this.router.navigate(["/observer"]);
              break;
          }
        }
      });
  }
}

interface LoginFormValues {
  username: string;

  password: string;
}
