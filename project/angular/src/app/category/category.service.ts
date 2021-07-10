import { Injectable } from '@angular/core';

// gọi api post and get
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';

  get_list_product( name_category ){
    return this.http.get( this.url + 'api/list_product/' + name_category );
  }
}
