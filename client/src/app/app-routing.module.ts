import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { LoginComponent } from './customer/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'product/:type/:id', component: ProductListComponent},
  // { path: 'product', component: ProductComponent},
  // { path: 'product-details/:id', component: ProductDetailsComponent},
  // { path: 'product-details', component: ProductDetailsComponent},

  { path: 'login', component: LoginComponent},
  // { path: 'signup', component: SignupComponent},


  // { path: 'viewCart', component: CartComponent},
  // { path: 'checkout', component: CheckoutComponent},
  // { path: 'shipping', component: ShippingComponent},
  // { path: 'payment', component: PaymentComponent},
  // { path: 'address', component: AddressComponent},
  { path: 'admin', component: AdminComponent},
  // { path: 'customer/signup', component: SignupComponent},
  // { path: 'customer/forgot-password', component: ForgotPasswordComponent},
  // { path: 'customer/reset-password', component: ResetPasswordComponent},
  // { path: 'customer/change-password', component: ChangePasswordComponent},
  // { path: 'thankyou', component: ThankyouComponent},
  // { path: 'shipping-info', component: ShippingPageComponent},
  // { path: 'buy-back', component: BuyBackComponent},


  // { path: 'sell/:id/:id', component: SellComponent },
  // { path: '**', redirectTo: '' },
];
@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
