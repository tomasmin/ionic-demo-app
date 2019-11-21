import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListService } from "./../services/list.service";

@Component({
  selector: "app-list-details",
  templateUrl: "./list-details.page.html",
  styleUrls: ["./list-details.page.scss"]
})
export class ListDetailsPage implements OnInit {
  information = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private listService: ListService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    this.listService.getDetails(id).subscribe(result => {
      this.information = result["drinks"][0];
    });
  }

  openWebsite() {
    window.open(this.information.Website, "_blank");
  }
}
