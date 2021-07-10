import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from './category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: ActivatedRoute, private server: CategoryService) { }

  link;
  list_product;

  ngOnInit(): void {
    this.router
    .paramMap
    .subscribe((params: ParamMap)=>{

      this.link = params.get('id');

      this.server
      .get_list_product( params.get('id') )
      .subscribe((kq)=>{
        this.list_product = kq['data'];
      })

    })
  }

}
