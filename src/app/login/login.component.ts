import { Component, OnInit } from '@angular/core';

// gọi service login
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service: LoginService ) { }

  loading:any;
  errorMessage:any;

  ngOnInit(): void {

    // gọi api đến nodejs, login và nodejs sẽ trả về token
    // ok: và nơi đặt token

    this.loading = true;
    this.errorMessage = "";

    // gọi api
    this.service
    .get_list_product()
    .subscribe((kq)=>{
      console.log( kq );
    },
    (error) => {                              //Error callback
      console.error('Không thể kết nối đến Server');
      this.errorMessage = error;
      this.loading = false;

      //throw error;   //You can also throw the error to a global error handler
    })



    // sử dụng localstorage
    
    // 1. tạo biến: localStorage.setItem('key', 'value')
    localStorage.setItem('key', 'ok');

    // 2. sử dụng biến: localStorage.getItem('key')

    // 3. xóa biến: localStorage.removeItem('key')

  }

}
