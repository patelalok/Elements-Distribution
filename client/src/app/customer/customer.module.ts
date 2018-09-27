import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [CustomerService]
})
export class CustomerModule { }
