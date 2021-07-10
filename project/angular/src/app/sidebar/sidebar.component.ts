import { Component, OnInit } from '@angular/core';

import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private server: SidebarService) { }

  list_category;
  list_bestSeller;

  ngOnInit(): void {
    this.server
    .get_list_category()
    .subscribe((kq)=>{
      this.list_category = kq['data'];
    });

    this.server
    .get_list_bestSeller()
    .subscribe((kq)=>{
      this.list_bestSeller = kq['data'];
    });
  }
}
