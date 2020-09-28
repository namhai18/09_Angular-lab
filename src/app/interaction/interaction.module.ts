import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InteractionComponent } from "./interaction.component";
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';

@NgModule({
  declarations: [InteractionComponent, DanhSachPhimComponent, ChiTietPhimComponent],
  imports: [CommonModule],
  exports: [InteractionComponent],
})
export class InteractionModule {}
