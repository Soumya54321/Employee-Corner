import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthLoginService } from '../services/auth-login.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private auth: AuthLoginService,private router: Router){}

  canActivate():boolean{
    if(this.auth.loggedIn()){
      return true;
    } else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
