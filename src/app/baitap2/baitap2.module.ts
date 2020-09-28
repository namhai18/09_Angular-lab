import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Baitap2Component } from "./baitap2.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { IndexComponent } from "./index/index.component";
import { SliderComponent } from "./slider/slider.component";
import { IndexContentComponent } from "./index-content/index-content.component";
import { ItemComponent } from "./item/item.component";

@NgModule({
  declarations: [
    Baitap2Component,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SliderComponent,
    IndexContentComponent,
    ItemComponent,
  ],
  exports: [Baitap2Component],
  imports: [CommonModule],
})
export class Baitap2Module {}
