import { Injectable } from '@angular/core';

// Gọi thư viện để sử dụng api
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/list_products';

  get_list_product(){
    return this.http.get( this.configUrl );
  }
}
