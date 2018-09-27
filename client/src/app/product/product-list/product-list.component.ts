import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // PARAMS CHANGED .. TO SOMETHING REALLY COOL HERE ..
 
      // for example extract the id..

      let id = +params['id'];
      if(params['type'] == 'model'){
         // (+) converts string 'id' to a number
        //this.getProductByModelId(id);
      }
      else if(params['type'] == 'category'){
        this.getProductByCategoryId(id);
      }
      else if(params['type'] == 'subCategory'){
        this.getProductBySubCategoryId(id);
      }   
    });
  }

  getProductByCategoryId(categoryId: number) {
    this.productService.getProductByCategoryId(categoryId)
    .subscribe((product: Product[])=>{
      this.productList = product;
      this.productList = this.productList.slice();
    })
  }
  getProductBySubCategoryId(subCategoryId: number) {
    this.productService.getProductBySuBCategoryId(subCategoryId)
    .subscribe((product: Product[])=>{
      this.productList = product;
      this.productList = this.productList.slice();
    })
  }


}

export class Product {
  transactionLineItemId: number;
  productNo: string;
  description: string;
  categoryId: number;
  brandId: number;
  vendorId: number;
  modelId: number;
  cost: number;
  retail: number;
  tier1: number;
  tier2: number;
  tier3: number;
  quantity: number;
  saleQuantity: number;
  ecommerce: boolean;
  tax: boolean;
  image: any;
  customerPhoneNo: string;
  date: any;
  status: any;
  featured: boolean;
  onSale: boolean;
  newProduct: boolean;
}
