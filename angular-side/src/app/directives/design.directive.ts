import { Directive, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';

@Directive({
  selector: '[appDesign]'
})
export class DesignDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style="font-weight: bold;";
    el.nativeElement.style="text-shadow: 1.5px 1.5px #ff0000;";
  }

}
