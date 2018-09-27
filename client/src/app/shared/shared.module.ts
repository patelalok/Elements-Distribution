import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedService } from './shared.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports:[HeaderComponent, FooterComponent,RouterModule, ReactiveFormsModule,
    FormsModule,],
  providers: [SharedService]
})
export class SharedModule { }
