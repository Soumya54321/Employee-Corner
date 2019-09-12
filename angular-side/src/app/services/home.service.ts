import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private details={};
  private status=0;
  private home_url="http://localhost:3000/api/home";
  private search_url="http://localhost:3000/api/search";

  constructor(private http: HttpClient) { }

  allEmployee(data){
    return this.http.post<any>(this.home_url,data);
  }

  searchEmployee(data){
    return this.http.post<any>(this.search_url,data);
  }

  storeEmployee(data){
    this.details=data;
  }

  getEmployee(){
    return this.details;
  }

  setStatus(value){
    this.status=value;
  }

  getStatus(){
    return this.status;
  }

  loggedIn(){
    return localStorage.getItem('token');
  }
}
