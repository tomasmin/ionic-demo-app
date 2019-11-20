import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.page.html",
  styleUrls: ["./sign-in.page.scss"]
})
export class SignInPage implements OnInit {
  constructor(public menu: MenuController) {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ngOnInit() {}
}
