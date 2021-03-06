import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  private login_url="http://localhost:3000/api/login";
  constructor(private http: HttpClient) { }

  loginUser(user){
    return this.http.post<any>(this.login_url,user);
  }

  loggedIn(){
    return localStorage.getItem('token');
  }
}
