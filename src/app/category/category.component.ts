import { Component, OnInit } from '@angular/core';

// Gọi 2 thư viện lấy params
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  name_category:any;

  // dữ liệu
  data:any = [1,2,3,4,5,6];
  // limit
  limit = 2;
  // tổng số trang
  totalData = this.data.length;
  // trang hiện tại
  p = 1;

  ngOnInit(): void {
    this.router
    .paramMap
    .subscribe((params:ParamMap)=>{

      this.name_category = params.get('id');

      //console.log( params.get('id') );

    })
  }

}
