import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [LoginService]
})
export class LoginModule { }
