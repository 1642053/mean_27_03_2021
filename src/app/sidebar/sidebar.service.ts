import { Injectable } from '@angular/core';

// gọi api post and get
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:3000/';

  get_categories()
  {
    return this.http.get( this.url + 'categories' );
  }
}
