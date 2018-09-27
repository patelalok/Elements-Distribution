import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductDetailsComponent, ProductListComponent],
  providers: [ProductService]
})
export class ProductModule { }
