import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormControl } from '@angular/forms/forms';
// import { Observer } from 'rxjs';
// import 'rxjs/Rx';
import { environment } from '../../environments/environment.prod';
import { Product } from '../product/product.component';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private url: string;
  menuDto: MenuDto;

  constructor() {
    this.url = environment.productUrl;
   }

  // getMenu(): Observable<any> {
  //   return this.http.get(this.url + '/getWebMenu')
  //   .pipe (
  //     catchError((error)=>{
  //       return throwError('some goes wrong');
  //     })
  //   )


  // }

  private extractData(res: Response): Product[] {
    const body = res.json();
    // console.log(body);
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

export class Category {
  name: string;
  categoryId: number;
}
export class Brand {
  name: string;
  brandId: number;
}
// export class Model {
//   name: string;
//   modelId: number;
// }

export class MenuDto {
  categoryDtoList: Category[];
  webBrandDtoList: Brand[];
  // modelDtoList: Model[];
}
