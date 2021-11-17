import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLigtBox]'
})
export class LigtBoxDirective implements OnChanges{

  @Input() hoverColor:string='red';
  @Input() defaultColor:string='blue';

  constructor(private elem:ElementRef) {
    elem.nativeElement.style="border: black 3px solid";
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.elem.nativeElement.style = `border: ${this.defaultColor} 5px solid`;

  }



   @HostListener('mouseover') onMouseOver(){
    this.elem.nativeElement.style = `border: ${this.hoverColor} 5px dashed`;
  }

  @HostListener('mouseout') onMouseOut(){
    this.elem.nativeElement.style = `border: ${this.defaultColor} 5px solid`;
  }

}
