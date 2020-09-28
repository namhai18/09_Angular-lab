import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    CheckboxModule,
    CardModule,
  ],
  exports: [BrowserAnimationsModule, ButtonModule, CheckboxModule, CardModule],
})
export class PrimeNgModule {}
