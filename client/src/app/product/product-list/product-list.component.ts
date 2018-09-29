import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
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
  productId: number;
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

export class ProductVariant {
  productVariantId?: number;
  productId: number;
  productNo: string;
  oldProductNo?: string;
  cost?: number;
  retail?: number;
  tier1?: number;
  tier2?: number;
  tier3?: number;
  quantity?: number;
  variant1: string;
  value1: string;
  variant2?: string;
  value2?: string;
  variant3?: string;
  value3?: string;
  image: any;
  createdTimestamp: any;
  operationType?: string;


  // productVariantNo: number;
  description?: string;
  categoryId?: number;
  subCategoryId?: number;
  brandId?: number
  vendorId?: number;
  modelId?: number;
  alternetNo?: string;

  markup?: number;
  minQuantity?: number;
  tax?: boolean;
  variant?: boolean;
  active?: boolean;
  ecommerce?: boolean;
  relatedProduct?: boolean;
  // defaultQuantity = 1;
  saleQuantity?: number;
  returnRule?: any;

  transactionComId?: number;
  date?: any;
  time?: any;
  status?: string;
  discount?: number;
  retailWithDiscount?: number;
  totalProductPrice?: number;
  taxAmountOnProduct?: number;
  imeiNo?: any;
  //productInventoryDaoList?: ProductInventory[];
}
