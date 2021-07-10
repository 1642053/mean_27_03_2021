import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private server:LoginService) { }

  ngOnInit(): void {
  }

  formlogin(username, password)
  {
    this.server
    .login( username.value, password.value )
    .subscribe((kq)=>{
      // local storage
      localStorage.setItem( 'token', kq['token'] );
    })
  }
}
