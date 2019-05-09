import { Component, OnInit } from "@angular/core";
import { Constants } from "../constants";

@Component({
  selector: "app-authentification",
  templateUrl: "./authentification.component.html",
  styleUrls: ["./authentification.component.css"]
})
export class AuthentificationComponent implements OnInit {

  public ngOnInit(): void {
    window.location.href = this.buildUrl();
  }

  private buildUrl(): string {
    let url: string = "";
    for (const informations of Constants.urlInformations) {
      url += informations;
    }

    return url;
  }
}
