import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-admin-portal",
  templateUrl: "./admin-portal.component.html",
  styleUrls: ["./admin-portal.component.css"]
})
export class AdminPortalComponent implements OnInit {
  category;

  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get("category");
    });
  }

  ngOnInit() {}
  menu = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Add User", key: "user" }
  ];
}
