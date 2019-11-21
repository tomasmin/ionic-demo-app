import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { ListService } from "./../services/list.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  results: Observable<any>;
  resultCount = 10;

  constructor(public menu: MenuController, private listService: ListService) {}

  ngOnInit() {
    this.results = this.listService.getRandomData(this.resultCount);
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }
}
