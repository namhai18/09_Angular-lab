import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StructuralDirectivesComponent } from "./structural-directives.component";
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [StructuralDirectivesComponent, NgifComponent, NgswitchComponent, NgForComponent],
  exports: [StructuralDirectivesComponent],
  imports: [CommonModule],
})
export class StructuralDirectivesModule {}
