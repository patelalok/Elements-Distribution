import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedService } from './shared.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
    
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports:[HeaderComponent, 
    FooterComponent,
    RouterModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule],
  providers: [SharedService]
})
export class SharedModule { }
