import { Injectable } from '@angular/core';

// gọi api post and get
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:3000/contactForm';

  contactForm(name:any, email:any, phone:any, message:any)
  {
    // cài đặt header
    let option = { headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") };

    let body = new URLSearchParams();

    // khai báo body
    body.set('name', name);
    body.set('email', email);
    body.set('phone', phone);
    body.set('message', message);

    return this.http.post( this.url, body.toString(), option );
  }
}
