import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from './admin.service';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent],
  providers: [AdminService]
})
export class AdminModule { }
