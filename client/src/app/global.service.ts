import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { CustomerService } from './customer/customer.service';
import { Product } from './product/product-list/product-list.component';
import { Customer } from './customer/signup/signup.component';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private url: string;
  purchasedProductList: Product[] = [];
  totalPurchasedProductCount: number = 0;
  totalPurchasedProductAmount: number = 0.0;

  loginedCustomer: Customer;

  purchasedProductListChange: Subject<Product[]> = new Subject<Product[]>();
  totalPurchasedProductCountChange: Subject<number> = new Subject<number>();
  totalPurchasedProductAmountChange: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient, private customerService: CustomerService) {
    this.url = environment.productUrl
  }


  addAllProductToCart(webTransactionLineItemDaoList: Array<Product>): boolean {

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.customerService.getToken()
    });

    let response: boolean = false;
    this.http.post(this.url + '/addAllToCart', webTransactionLineItemDaoList, { headers: headers })
      .subscribe((data) => {
        console.log('response After adding all to backend', data);

        if (data) {
          // Adding product one by on to purchased produt array.
          webTransactionLineItemDaoList.forEach((addedProducts) => {
            this.purchasedProductList.push(addedProducts);
          });

          this.purchasedProductList = this.purchasedProductList.slice();

          let quantity = 0;
          let totalAmount = 0;

          this.purchasedProductList.forEach((count) => {
            quantity = +quantity + count.saleQuantity;
            totalAmount = +totalAmount + (count.saleQuantity * count.retail);

            response = true;
          });
          // To set decimal values to 2 digits.
          totalAmount = Math.round(totalAmount * 1e2) / 1e2;

          console.log('sale quanity forth check', quantity);

          this.totalPurchasedProductCount = quantity;
          this.totalPurchasedProductAmount = totalAmount;

          this.purchasedProductListChange.next(this.purchasedProductList);
          this.totalPurchasedProductCountChange.next(this.totalPurchasedProductCount);
          this.totalPurchasedProductAmountChange.next(this.totalPurchasedProductAmount);

          console.log('purchased product after add and slice', this.purchasedProductList)
        }

      },
        error => {
          response = false;
          console.log(JSON.stringify(error.json()));
        });

    return response;
  }
  getPurchasedProductList(): Product[] {

    console.log('first', this.purchasedProductList)

    if (this.purchasedProductList.length <= 0) {

      this.getPurchasedProductListFromBackEnd()
        .subscribe((purchasedProduct) => {
          this.purchasedProductList = purchasedProduct;
          this.purchasedProductList = this.purchasedProductList.slice();
          console.log('purchased product list after service Call', this.purchasedProductList);
          this.purchasedProductListChange.next(this.purchasedProductList);
          let quantity = 0;
          let totalAmount = 0;


          this.purchasedProductList.forEach((count) => {
            quantity = +quantity + count.saleQuantity;
            totalAmount = +totalAmount + (count.saleQuantity * count.retail);
          });

          //To set decimal values to 2 digits.
          totalAmount = Math.round(totalAmount * 1e2) / 1e2;

          this.totalPurchasedProductCount = quantity;
          this.totalPurchasedProductAmount = totalAmount;

          this.totalPurchasedProductCountChange.next(this.totalPurchasedProductCount);
          this.totalPurchasedProductAmountChange.next(this.totalPurchasedProductAmount);

        });

      return this.purchasedProductList;
    }
    else {
      // this is very important.
      this.purchasedProductListChange.next(this.purchasedProductList);
      let quantity = 0;
      let totalAmount = 0;
      this.purchasedProductList.forEach((count) => {
        quantity = +quantity + count.saleQuantity;
        totalAmount = +totalAmount + (count.saleQuantity * count.retail);
      });
      // To set decimal values to 2 digits.
      totalAmount = Math.round(totalAmount * 1e2) / 1e2;

      this.totalPurchasedProductCount = quantity;
      this.totalPurchasedProductAmount = totalAmount;

      this.totalPurchasedProductCountChange.next(this.totalPurchasedProductCount);
      this.totalPurchasedProductAmountChange.next(this.totalPurchasedProductAmount);

      return this.purchasedProductList;
    }

  }

  getPurchasedProductListFromBackEnd(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.customerService.getToken()
    });

    let token = this.customerService.getToken();
    let selectedCustomer: Customer = this.customerService.getCustomerDetailsForSale();
    if (token && selectedCustomer) {
      return this.http.get(this.url + '/getCartItem?phoneNo=' + selectedCustomer.phoneNo, { headers: headers });
    }
    else {
      return null;
    }

  }

}
