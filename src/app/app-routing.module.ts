import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModeratorComponent } from "./components/moderator/moderator.component";
import { ObserverComponent } from "./components/observer/observer.component";
import { ClientComponent } from "./components/client/client.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "moderator",
    component: ModeratorComponent
  },
  {
    path: "observer",
    component: ObserverComponent
  },
  {
    path: "client",
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
