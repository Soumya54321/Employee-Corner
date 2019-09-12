import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modification'
})
export class ModificationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var id=localStorage.getItem("Id");
    var name=localStorage.getItem("Name");
    let newString=value;
    let newId="";
    if(args[1]==="Id"){
      newId=newId+id;
    }
    if(value==name && args[1]==="Users"){
      newString=newString+" (User)";
    }
    return newString;
  }

}
