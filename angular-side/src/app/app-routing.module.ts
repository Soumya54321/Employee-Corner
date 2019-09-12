import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AuthGuard } from './guard/auth.guard';
import { DetailsAuthGuard } from './guard/details-auth.guard';
import { AuthloginGuard } from './guard/authlogin.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent,canActivate:[AuthloginGuard] },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'employee_details', component:EmployeeDetailsComponent,canActivate:[DetailsAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
