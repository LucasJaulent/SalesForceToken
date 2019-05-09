import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Constants } from "../constants";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.component.html",
  styleUrls: ["./callback.component.css"]
})
export class CallbackComponent implements OnInit {

  public constructor(private router: Router, private http: HttpClient) { }

  private accessToken: string;
  private refreshToken: string;

  public ngOnInit(): void {
    const code: string = this.getCodeFromUrl();
    this.getTokens(code);
  }

  private getCodeFromUrl(): string {
    return this.router.url.substr(this.router.url.indexOf("=") + 1);
  }

  private getTokens(code: string): void {
    this.http.post(Constants.callbackUr, {code: code}).subscribe((res: JSON) => {
      this.accessToken = (res as any).access_token;
      this.refreshToken = (res as any).refresh_token;

      return [this.accessToken, this.refreshToken];
    });
  }
}
