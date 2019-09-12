import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AuthRegistrationService } from '../app/services/auth-registration.service';
import { AuthLoginService } from '../app/services/auth-login.service';
import { HomeService } from '../app/services/home.service';
import { ModificationPipe } from './pipes/modification.pipe';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DesignDirective } from './directives/design.directive';
import { DesignNamePipe } from './pipes/design-name.pipe';
import { AuthGuard } from './guard/auth.guard';
import { DetailsAuthGuard } from './guard/details-auth.guard';
import { AuthloginGuard } from './guard/authlogin.guard';
import { CountDirective } from './directives/count.directive';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ModificationPipe,
    EmployeeDetailsComponent,
    DesignDirective,
    DesignNamePipe,
    CountDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [AuthRegistrationService,AuthLoginService,HomeService,AuthGuard,DetailsAuthGuard,AuthloginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
