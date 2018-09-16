import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutService } from './checkout.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckoutComponent],
  providers: [CheckoutService]
})
export class CheckoutModule { }
