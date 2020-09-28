import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.scss"],
})
export class NgForComponent implements OnInit {
  dssv: any[] = [
    { hoTen: "Ti", lop: "FE37" },
    { hoTen: "Suu", lop: "FE37" },
    { hoTen: "Dan", lop: "FE37" },
    { hoTen: "Meo", lop: "FE37" },
  ];

  colors: string[] = ["Red", "Green", "Blue", "White", "Black"];

  constructor() {}

  ngOnInit(): void {}
}
