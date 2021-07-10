import { Injectable } from '@angular/core';
// gọi api post and get
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';

  get_info_user( token ){
    return this.http.get( this.url + 'api/info_user/' + token );
  }

}
