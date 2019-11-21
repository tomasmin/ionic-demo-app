import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appPages = [
    {
      title: "Dashboard",
      url: "/list",
      icon: "list"
    },
    {
      title: "Photos",
      url: "/list",
      icon: "photos"
    },
    {
      title: "Available Missions",
      url: "/list",
      icon: "star-outline"
    },
    {
      title: "My Missions",
      url: "/list",
      icon: "star"
    },
    {
      title: "Chat",
      url: "/list",
      icon: "chatboxes"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOut() {
    this.router.navigateByUrl("/sign-in");
  }
}
