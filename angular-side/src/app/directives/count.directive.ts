import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCount]'
})
export class CountDirective {

  private count=0;
  constructor(private el: ElementRef) {  }


}
