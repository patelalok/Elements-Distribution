import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './signup/signup.component';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.productUrl;
  }

  login(username:string, password:string){
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.url+'/auth',JSON.stringify({username: username, password: password}),{headers: headers});
  }
  addOrUpdateCustomer(customer: Customer) {
    return this.http.post(this.url+'/addCustomer', customer);
  }
  resetPassword(customerDao: Customer){
    let headers = new Headers({
      'content-type': 'application/json'
      });

      this.http.post(this.url+'/resetPassword',customerDao)
      .subscribe((test) =>{
        console.log('Reset password', test);
      });
  }
  sendResetPasswordLink(email: string){
    let headers = new Headers({
      // 'Authorization': 'Bearer ' +this.getToken(),
      'content-type': 'application/json'
      });

     this.http.post(this.url+'/sendEmailToResetPassword',email)
     .subscribe((test) =>{
       console.log('test', test);
     })
  }
}