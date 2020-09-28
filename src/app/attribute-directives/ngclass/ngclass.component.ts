import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngclass",
  templateUrl: "./ngclass.component.html",
  styleUrls: ["./ngclass.component.scss"],
})
export class NgclassComponent implements OnInit {
  mauChu: boolean = false;
  fontChu: boolean = false;

  color: string = "red";
  urlImg: string =
    "https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg";

  constructor() {}

  ngOnInit(): void {}

  toggleColor() {
    this.mauChu = !this.mauChu;
  }

  toggleFontSize() {
    this.fontChu = !this.fontChu;
  }
}
