import { Component, OnInit } from '@angular/core';

// gọi service
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private service:SidebarService ) { }

  public categories:any; 

  ngOnInit(): void {
    this.service
    .get_categories()
    .subscribe((kq:any)=>{
      this.categories = kq['data'];
    })
  }

}
