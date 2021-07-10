import { Injectable } from '@angular/core';

// gọi api post and get
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';

  get_list_category(){
    return this.http.get( this.url + 'api/category/list' );
  }

  get_list_bestSeller(){
    return this.http.get( this.url + 'api/product/bestSeller' );
  }

}
