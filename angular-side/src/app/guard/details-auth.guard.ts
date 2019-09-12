import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HomeService } from '../../app/services/home.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsAuthGuard implements  CanActivate{
  constructor(private home:HomeService,private router: Router){}

  canActivate():boolean{
    if(this.home.getStatus()!=0){
      return true;
    } else{
      this.router.navigate(['home']);
      return false;
    }
  }
}
