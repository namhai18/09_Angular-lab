import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataBindingComponent } from "./data-binding.component";
import { OnewayBindingComponent } from "./oneway-binding/oneway-binding.component";
import { FormsModule } from "@angular/forms";
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { Baitap1Component } from './baitap1/baitap1.component';

@NgModule({
  declarations: [DataBindingComponent, OnewayBindingComponent, TwowayBindingComponent, Baitap1Component],
  imports: [CommonModule, FormsModule],
  exports: [DataBindingComponent],
})
export class DataBindingModule {}
