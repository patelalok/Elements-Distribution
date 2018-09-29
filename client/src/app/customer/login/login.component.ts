import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginSuccess: boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group(
      {
        'email': ['', Validators.required], // TODO - Need to fox this too .com is not validating
        'password': [null, Validators.required]
      }
    );
  }


  login(){
    let username = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    this.customerService.login(username, password)
    .subscribe((response)=>{

      console.log('response', response);
      if(response){
        // this.toastr.success('Wel-Come, Login Successfully!!', null, {positionClass: "toast-top-center"});
        this.router.navigate(['']);
        //this.globalService.getPurchasedProductList();
       // window.location.reload();
      }else {
        this.loginSuccess = false;
        //this.toastr.error('Wrong Username Or Password', null, {positionClass: "toast-top-center"});
      }
    }
    ,
      (err) => {
        if(err == 'Unauthorized'){
          this.loginSuccess = false;
        }
      }
  );
}

}
