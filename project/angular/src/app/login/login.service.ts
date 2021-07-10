import { Injectable } from '@angular/core';

// gọi api post and get
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';

  login( username, password ){
    // cài đặt header
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };

    let body = new URLSearchParams();

    // khai báo body
    body.set('username', username);
    body.set('password', password);

    return this.http.post( this.url + 'login', body.toString(), option );
  }
}
