import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddBorder]'
})
export class AddBorderDirective {

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    renderer.setStyle(elementRef.nativeElement, 'border-style', 'solid')

    renderer.setStyle(elementRef.nativeElement,'border-radius', '200px' )
    renderer.setStyle(elementRef.nativeElement,'border-color', 'green' )
    renderer.setStyle(elementRef.nativeElement,'border-size', '10px' )
    renderer.setStyle(elementRef.nativeElement,'color', 'red' )

  }

}
