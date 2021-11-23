import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProductCards]'
})
export class ProductCardsDirective implements OnChanges{

  @Input() bgColor:string='';

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style =
    `
    color: white;
    background-color:black;

    `;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.elem.nativeElement.style =
    `
    color: white;
    background-color:${this.bgColor};

    `;
  }

  @HostListener('mouseover') onMouseOver(){
    this.elem.nativeElement.style =
    `
    color: red;
    background-color:${this.bgColor};
    transform: scale(1.05);
    box-shadow: 10px 10px 15px rgba(0,0,0,0.3);

    `;
  }

  @HostListener('mouseout') onMouseOut(){
    this.elem.nativeElement.style = `color: white; background-color:blue`;
  }

}
