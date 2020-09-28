import { Component, OnInit, ViewChild } from "@angular/core";
import { DanhSachPhimComponent } from "./danh-sach-phim/danh-sach-phim.component";

@Component({
  selector: "app-interaction",
  templateUrl: "./interaction.component.html",
  styleUrls: ["./interaction.component.scss"],
})
export class InteractionComponent implements OnInit {
  @ViewChild(DanhSachPhimComponent) tagDanhSachPhim: DanhSachPhimComponent;
  constructor() {}

  ngOnInit(): void {}

  themPhim(maPhim: string, tenPhim: string, gia: string, hinhAnh: string) {
    // this.tagDanhSachPhim.danhSachPhim.push({
    //   maPhim,
    //   tenPhim,
    //   gia: giaPhim,
    //   hinhAnh,
    // });
    this.tagDanhSachPhim.themPhim({ maPhim, tenPhim, gia, hinhAnh });
  }
}
