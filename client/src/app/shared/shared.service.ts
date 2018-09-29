import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms/forms';
import { HttpClient } from '@angular/common/http';

// import { Observer } from 'rxjs';
// import 'rxjs/Rx';
import { environment } from '../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private url: string;
  menuDto: MenuDto;
  private customerDetails: any;

  constructor(private http: HttpClient) {
    this.url = environment.productUrl;
   }

  getMenu(): Observable<any> {
    return this.http.get(this.url + '/getWebMenu');
  }

  setCustomerDetailsForSale(obj: any): void {
    this.customerDetails = obj;
    localStorage.setItem('customerDetails', JSON.stringify(obj));
  }

  getCustomerDetailsForSale(): any {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    return this.customerDetails;
  }

  // private extractData(res: Response): Product[] {
  //   const body = res.json();
  //   // console.log(body);
  //   return body || {};
  // }

  // private handleError(error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}

export class Category {
  name: string;
  categoryId: number;
  subCategoryDaoList: SubCategory[];
}
export class WebBrandDto {
  brandName: string;
  brandId: number;
}
export class SubCategory {
  id: number;
  categoryId: number;
  name: string;
  ecommerce: boolean;
  description: string;

}
// export class Model {
//   name: string;
//   modelId: number;
// }

export class MenuDto {
  categoryDtoList: Category[];
  webBrandDtoList: WebBrandDto[];
  // modelDtoList: Model[];
}
