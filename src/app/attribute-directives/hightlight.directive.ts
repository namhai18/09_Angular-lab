import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appHightlight]",
})
export class HightlightDirective {
  constructor(private ele: ElementRef, private render: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "red";
    this.render.setStyle(this.ele.nativeElement, "background-color", "green");
  }

  @HostBinding("style.backgroundColor") bgColor: string = "blue";

  @HostListener("mouseenter") suKienHover() {
    // this.render.setStyle(this.ele.nativeElement, "background-color", "red");
    this.bgColor = "red";
  }

  @HostListener("mouseleave") suKienBlur() {
    // this.render.setStyle(this.ele.nativeElement, "background-color", "yellow");
    this.bgColor = "yellow";
  }
}
