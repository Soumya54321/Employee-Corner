import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public records;
  public arrayOfKeys;
  public name;
  constructor(private home: HomeService,private router: Router) { }

  ngOnInit(){
    this.records=this.home.getEmployee();
    var key = "emp_password";
    delete this.records[0][key];

    this.arrayOfKeys = Object.keys(this.records[0]);
    this.name=this.records[0].emp_name;
  }

  back(){
    this.router.navigate(['home']);
    this.home.setStatus(0);
  }
}
