import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { ChiTietPhimComponent } from "../chi-tiet-phim/chi-tiet-phim.component";
@Component({
  selector: "app-danh-sach-phim",
  templateUrl: "./danh-sach-phim.component.html",
  styleUrls: ["./danh-sach-phim.component.scss"],
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(ChiTietPhimComponent) tagChiTietPhim: QueryList<
    ChiTietPhimComponent
  >;

  danhSachPhim: any[] = [
    {
      maPhim: 1,
      tenPhim: "Minions",
      gia: "85000",
      hinhAnh: "assets/images/minions.jpg",
    },
    {
      maPhim: 2,
      tenPhim: "Home",
      gia: "85000",
      hinhAnh: "assets/images/home.jpg",
    },
    {
      maPhim: 3,
      tenPhim: "Harvie",
      gia: "85000",
      hinhAnh: "assets/images/harvie.jpg",
    },
    {
      maPhim: 4,
      tenPhim: "Insideout",
      gia: "85000",
      hinhAnh: "assets/images/insideout.jpg",
    },
  ];

  danhSachLike: any[] = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 },
  ];

  constructor() {}

  ngOnInit(): void {}

  like(phim: any) {
    const phimSelected = this.danhSachLike.find(
      (item) => item.maPhim === phim.maPhim
    );
    phimSelected.soLike++;
  }

  themPhim(phim: any) {
    this.danhSachPhim.push(phim);
  }

  viewChildren() {
    this.tagChiTietPhim.forEach((item: ChiTietPhimComponent) => {
      item.handleDiscount();
      console.log(item);
    });
  }

  handleDiscount(event) {
    const movie = this.danhSachPhim.find(
      (item) => item.maPhim === event.phim.maPhim
    );
    movie.gia -= (movie.gia * event.percent) / 100;

    console.log(this.danhSachPhim);
  }
}
