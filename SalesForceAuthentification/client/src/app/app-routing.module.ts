import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { CallbackComponent } from "./callback/callback.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "callback", component: CallbackComponent },
  { path: "authentification", component: AuthentificationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
