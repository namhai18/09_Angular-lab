import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngif",
  templateUrl: "./ngif.component.html",
  styleUrls: ["./ngif.component.scss"],
})
export class NgifComponent implements OnInit {
  isLoggedIn: boolean = false;

  isRegister: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  dangKy() {
    this.isRegister = true;
  }

  dangNhap() {
    this.isRegister = false;
  }
}
