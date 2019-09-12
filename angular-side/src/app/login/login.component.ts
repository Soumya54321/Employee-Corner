import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from '../services/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthLoginService,private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    var num_em=(<HTMLInputElement>document.getElementById('num_em')).value;
    var pass=(<HTMLInputElement>document.getElementById('password')).value;

    var span3=(<HTMLInputElement>document.getElementById('span3'));
    var span5=(<HTMLInputElement>document.getElementById('span5'));

    var span_num_em=(<HTMLInputElement>document.getElementById('span-number'));
    var span_pass=(<HTMLInputElement>document.getElementById('span-password'));

    if(num_em!="" && pass!=""){
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
          emp_email:email,
          emp_number:number,
          emp_password:pass
        }
        this.auth.loginUser(data).subscribe(
          res=>{
            if(res.success==1){
              this.router.navigate(['home']);
              localStorage.setItem('Name',res.employee_name);
              localStorage.setItem('Id',res.employee_id);
              localStorage.setItem('Depratment',res.employee_dept);
              localStorage.setItem('token',res.token);
            }else{
              window.alert("Employee details are not found");  
            }
          },
          err=>{
            window.alert("Something is going wrong\nCan not login now\nPlease try after sometime");
          }
        )

      }
    }else{
      var flag=0;
      if(num_em=="" && flag==0){
          span3.style.display='inline';
          span_num_em.style.display='inline';
          flag++;
      }
      if(pass=="" && flag==0){
          span5.style.display='inline';
          span_pass.style.display='inline';
          flag++;
      }

      setTimeout(function(){
        span3.style.display='none';
        span_num_em.style.display='none';
        span5.style.display='none';
        span_pass.style.display='none';
      },3000);
    }
  }
}
