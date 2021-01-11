// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";

// Services
import { ObserverComponent } from "./components/observer/observer.component";
import { ModeratorComponent } from "./components/moderator/moderator.component";
import { ClientComponent } from "./components/client/client.component";
import { HomeComponent } from "./components/home/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    ObserverComponent,
    ModeratorComponent,
    ClientComponent,
    HomeComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
