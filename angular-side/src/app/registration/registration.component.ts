import { Component, OnInit } from '@angular/core';
import { AuthRegistrationService } from '../services/auth-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private auth: AuthRegistrationService,private router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    var name=(<HTMLInputElement>document.getElementById('name')).value;
    var emp_id=(<HTMLInputElement>document.getElementById('emp_id')).value;
    var num_em=(<HTMLInputElement>document.getElementById('num_em')).value;
    var dept=(<HTMLInputElement>document.getElementById('dept')).value;
    var pass=(<HTMLInputElement>document.getElementById('password')).value;

    var span1=(<HTMLInputElement>document.getElementById('span1'));
    var span2=(<HTMLInputElement>document.getElementById('span2'));
    var span3=(<HTMLInputElement>document.getElementById('span3'));
    var span4=(<HTMLInputElement>document.getElementById('span4'));
    var span5=(<HTMLInputElement>document.getElementById('span5'));

    var span_name=(<HTMLInputElement>document.getElementById('span-name'));
    var span_empid=(<HTMLInputElement>document.getElementById('span-id'));
    var span_num_em=(<HTMLInputElement>document.getElementById('span-number'));
    var span_dept=(<HTMLInputElement>document.getElementById('span-dept'));
    var span_pass=(<HTMLInputElement>document.getElementById('span-password'));

    if(name!="" && emp_id!="" && num_em!="" && dept!="" && pass!=""){
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      var emailid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var number='';
      var email='';
      if(num_em.match(phoneno)){
        number=num_em;
      }else if(num_em.match(emailid)){
        email=num_em;
      }else{
          span3.style.display='inline';
          span_num_em.style.display='inline';

          setTimeout(function(){
            span3.style.display='none';
            span_num_em.style.display='none';
          },3000);
      }
      if(pass.length>=8 && (number !="" || email!="")){
        var data={
          emp_name:name,
          emp_id:emp_id,
          emp_email:email,
          emp_number:number,
          emp_dept:dept,
          emp_password:pass
        }
        this.auth.registerUser(data).subscribe(
          res=>{
            if(res.success==1){
              this.router.navigate(['login']);
            }else{
              window.alert("Employee is already registered\nPlease go to the login page");  
            }
            
          },
          err=>{
            window.alert("Something is going wrong\nCan not register Now\nPlease try after sometime");
          }
        )

      }
    }else{
      var flag=0;
      if(name=="" && flag==0){
          span1.style.display='inline';
          span_name.style.display='inline';
          flag++; 
      }
      if(emp_id=="" && flag==0){
          span2.style.display='inline';
          span_empid.style.display='inline';
          flag++;
      }
      if(num_em=="" && flag==0){
          span3.style.display='inline';
          span_num_em.style.display='inline';
          flag++;
      }
      if(dept=="" && flag==0){
        span4.style.display='inline';
        span_dept.style.display='inline';
        flag++;
      }
      if(pass=="" && flag==0){
          span5.style.display='inline';
          span_pass.style.display='inline';
          flag++;
      }

      setTimeout(function(){
        span1.style.display='none';
        span_name.style.display='none';
        span2.style.display='none';
        span_empid.style.display='none';
        span3.style.display='none';
        span_num_em.style.display='none';
        span4.style.display='none';
        span_dept.style.display='none';
        span5.style.display='none';
        span_pass.style.display='none';
      },3000);
    }
  }
}
