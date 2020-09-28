import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Baitap1Module } from "./baitap1/baitap1.module";
import { Baitap2Module } from "./baitap2/baitap2.module";
import { DataBindingModule } from "./data-binding/data-binding.module";
import { StructuralDirectivesModule } from "./structural-directives/structural-directives.module";
import { AttributeDirectivesModule } from "./attribute-directives/attribute-directives.module";
import { NgContentComponent } from "./ng-content/ng-content.component";
import { CardComponent } from "./ng-content/card/card.component";
import { InteractionModule } from "./interaction/interaction.module";
import { PrimeNgModule } from "./prime-ng/prime-ng.module";

@NgModule({
  declarations: [AppComponent, NgContentComponent, CardComponent],
  imports: [
    BrowserModule,
    Baitap1Module,
    Baitap2Module,
    DataBindingModule,
    StructuralDirectivesModule,
    AttributeDirectivesModule,
    InteractionModule,
    PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
