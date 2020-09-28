import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-chi-tiet-phim",
  templateUrl: "./chi-tiet-phim.component.html",
  styleUrls: ["./chi-tiet-phim.component.scss"],
})
export class ChiTietPhimComponent implements OnInit {
  @Input() phim: any;
  @Output() eventLike = new EventEmitter();
  @Output() eventDiscount = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log(this.phim);
  }

  handleLike(phim: any) {
    this.eventLike.emit(phim);
  }

  handleDiscount() {
    if (this.phim.gia >= 80000) {
      this.eventDiscount.emit({ phim: this.phim, percent: 10 });
    }
  }
}
