import { Component, OnInit, ElementRef } from '@angular/core';
import { AdminService } from './admin.service';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product-list/product-list.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService, private element: ElementRef, private productService: ProductService) { }

  productViewList: Product[] = [];
  image: any;
  formData: FormData;
  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails(){
    this.productService.getAllProducts()
    .subscribe((product)=>{
      this.productViewList = product;
    })
  }

  addImage(product: Product, index: number) {
    const element: any = (document.querySelectorAll('#file-input')[index]);
    console.log('image', element.files[0]);
   // console.log('Event', event.target.files[0]);
    this.image = element.files[0];

    this.formData = new FormData();
    this.formData.append('file', this.image);
    this.productService.addImage(product.productNo, this.formData);
}
}
