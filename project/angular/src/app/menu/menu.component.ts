import { Component, OnInit } from '@angular/core';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private server: MenuService) { }

  menu;

  ngOnInit(): void {
    this.server
    .get_list_menu()
    .subscribe((kq)=>{
      this.menu = kq['data'];
    })
  }

}
