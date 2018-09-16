import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Product } from './product.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.productUrl;
  }

  getAllProducts() {

    let headers = new Headers({
      // 'Authorization': 'Bearer ' + this.customerService.getToken()
    });

    return this.http.get<Product[]>(this.url + '/getAllProduct')
  }
  
  getProductByCategoryId(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/getProductsByCategory?categoryId=' + categoryId);
  }
  
  addImage(productNo: string, image: any) {

    let headers = new Headers({
     // 'Authorization': 'Bearer ' + this.customerService.getToken()
    });

    console.log('Customer to be Added' + image);
    this.http.post(this.url + '/insertProductImage?productNo=' + productNo, image)
      .subscribe(data => {
        console.log('Response From Add Customer call' + data);
      },
        error => {
          console.log(JSON.stringify(error.json()));
        });
  }
}
