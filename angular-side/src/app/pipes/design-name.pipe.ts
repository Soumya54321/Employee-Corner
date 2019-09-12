import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'designName'
})
export class DesignNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newString=value;
    if(args[1]==="Name"){
      newString=newString+"'s Details";
    }
    return newString;
  }

}
