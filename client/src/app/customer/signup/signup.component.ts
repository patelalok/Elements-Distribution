import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from '../customer.service';
// import * as moment from 'moment';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  customerForm: FormGroup;
  state: string[] = [];


  constructor(private formBuilder: FormBuilder,  private customerService: CustomerService) { }

  ngOnInit() {

    this.customerForm = this.formBuilder.group(
      {
        'firstName': [null, Validators.required],
        'lastName': [null, Validators.required],
        'phoneNo': ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        'email': ['', Validators.required], // TODO - Need to fox this too .com is not validating
        'street': [null, Validators.required],
        'zipCode': ['', Validators.required],
        'city': ['', Validators.required],
        'state': ['Alabama', Validators.required],
        'country': [''],
        'companyName': ['', Validators.required],
        'name': [''],
        'createdTimestamp': [''],
        'tier': [''],
        'operationType': [''],
        'taxId': ['']
      }
    );

    // tslint:disable-next-line:whitespace
    // tslint:disable-next-line:max-line-length
    this.state = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    this.customerForm.get('state').setValue('Alabama');
  }

  register() {

    if (!this.customerForm.valid) {
      alert('Please fill all required fields');
    }

    const name: string = this.customerForm.get('firstName').value;
    const a = this.customerForm.get('lastName');

    this.customerForm.get('name').setValue(this.customerForm.get('firstName').value + ' ' + this.customerForm.get('lastName').value);
    // this.customerForm.get('createdTimestamp').setValue(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
    this.customerForm.get('tier').setValue(3);
    this.customerForm.get('operationType').setValue('Add');
    this.customerService.addOrUpdateCustomer(this.customerForm.value)
    .subscribe(data => {
      // if (data.status === 200 || data.status === 201) {
      //   this.toastr.success('Wel-Come'+name+' Please check your email for login details', 'Registered Successfully!!');
      //   this.router.navigate(['']);
      // }
    },
      error => {
        console.log(JSON.stringify(error.json()));
  });
    this.customerForm.reset();

  }
}

export class Customer {
  phoneNo: string;
  name: string;
  companyName: string;
  email: any;
  taxId: any;
  // dateOfBirth: any;
  // type: any;
  // gender: any;
  street: any;
  city: string;
  state: string;
  country: string;
  zipCode: number;
  // storeCredit: any;
  // balance: number;
  // lastUpdatedStoreCreditDate: any;
  password: any;
  createdTimestamp: any;
  validUser: boolean;
  tier: number;
  confirmPassword?:string;
  token?:string;
  // customerNote: any;
}
