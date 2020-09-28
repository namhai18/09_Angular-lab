import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-oneway-binding",
  templateUrl: "./oneway-binding.component.html",
  styleUrls: ["./oneway-binding.component.scss"],
})
export class OnewayBindingComponent implements OnInit {
  name: string = "Hello Cybersoft";
  constructor() {}

  ngOnInit(): void {}

  changeName(name: string) {
    console.log(name);
    this.name = name;
  }
}
