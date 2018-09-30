import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer/signup/signup.component';
import { Product, ProductVariant } from '../product-list/product-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productVariantList: ProductVariant[] = [];
  selectedProductSale: Product;
  constructor(private router: Router, private route: ActivatedRoute,private productService: ProductService, private sharedService:SharedService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      // Getting Product Id and then call backend to get variant details if any.
      let product = +params['id'];
      console.log('id', product);
     //this.getProductVariantDetails(product);
    });
    //this.selectedProductSale = this.productService.getSelectedProductForSale();
  }


 
}
