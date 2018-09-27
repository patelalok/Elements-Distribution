import { Component, OnInit } from '@angular/core';
import { SharedService, MenuDto } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuDto : MenuDto;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.sharedService.getMenu()
    .subscribe((menu: MenuDto)=>{
      this.menuDto = menu;
      console.log('meunu', this.menuDto);
    });
 
  }

}
