import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HomeService } from '../../app/services/home.service';

@Injectable({
  providedIn: 'root'
})
export class AuthloginGuard implements  CanActivate{
  constructor(private home:HomeService,private router: Router){}

  canActivate():boolean{
    if(!this.home.loggedIn()){
      return true;
    } else{
      this.router.navigate(['home']);
      return false;
    }
  }
}
