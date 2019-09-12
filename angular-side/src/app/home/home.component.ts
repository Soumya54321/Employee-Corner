import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  records=[];
  constructor(private home: HomeService,private router: Router) { }

  ngOnInit() {
    var data={status:1};
    this.home.setStatus(0);
    this.home.allEmployee(data).subscribe(
      res=>{
        this.records=res;
      },
      err=>{
        window.alert("Something is going wrong\nCan not find any employee\nPlease try after sometime");
      })
    }

    searchEmployee(){
      var filter=(<HTMLInputElement>document.getElementById('filter')).value;
      var item=(<HTMLInputElement>document.getElementById('searchItem')).value;

      var span4=(<HTMLInputElement>document.getElementById('span4'));

      var span_filter=(<HTMLInputElement>document.getElementById('span-filter'));
      var span_data=(<HTMLInputElement>document.getElementById('span-data'));

      var dept=localStorage.getItem('Depratment');
      var data;
      if(filter!="" && filter!="Choose Filter" && item!=""){
        if(filter == "By Name"){
          data={emp_name:item};
        }else if(filter == "By Employee Id"){
          data={emp_id:item};
        }else if(filter == "By email"){
          data={emp_email:item};
        }else if(filter == "By Phone number"){
          data={emp_number:item};
        }
        this.home.searchEmployee(data).subscribe(
          res=>{
            if(res.success==-1){
              window.alert("No employee is found");
            }else if(res[0].emp_dept!=dept){
              window.alert("Sorry!!\nYou can not see the details of that person,\nwho is in other department");
            }else{
              this.home.storeEmployee(res);
              this.home.setStatus(1);
              this.router.navigate(['employee_details']);
            }
          }
        );
      }else{
        var flag=0;
        if((filter=="" || filter=="Choose Filter") && flag==0){
            span4.style.display='inline';
            span_filter.style.display='inline';
            flag++;
        }else if(item=="" && flag==0){
            span4.style.display='inline';
            span_data.style.display='inline';
            flag++;
        }

        setTimeout(function(){
          span4.style.display='none';
          span_data.style.display='none';
          span_filter.style.display='none';
        },3000);
      }
    }

    viewDetails(event){
      var target = event.currentTarget;
      var idAttr = target.attributes.id.value;
      var data={emp_id:idAttr};

      var dept=localStorage.getItem('Depratment');
      this.home.searchEmployee(data).subscribe(
        res=>{
          if(res.success==-1){
            window.alert("No employee is found");
          }else if(res[0].emp_dept!=dept){
            window.alert("Sorry!!\nYou can not see the details of that person,\nwho is in other department");
          }else{
            this.home.storeEmployee(res);
            this.home.setStatus(1);
            this.router.navigate(['employee_details']);
          }
        }
      );
    }

    logout(){
      this.home.setStatus(0);
      localStorage.clear();
      this.router.navigate(['login']);
    }
}
