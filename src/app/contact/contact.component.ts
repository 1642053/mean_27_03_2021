import { Component, OnInit } from '@angular/core';

// gọi service
import { ContactService } from './contact.service';

// Gọi form lấy dữ liệu và kiểm tra dữ liệu bên trong file .ts
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private service: ContactService ) { }

  // Form Group

  // Tạo form Group
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')])
  });

  // Trả về từng giá trị từ contactFrom để kiểm tra lỗi
  get name(){ return this.contactForm.controls.name; }
  get email(){ return this.contactForm.controls.email; }
  get phone(){ return this.contactForm.controls.phone; }
  get message(){ return this.contactForm.controls.message; }

  getFormGroup(){
    console.log( this.contactForm.value );
  }

  // end From Group

  // FormsModule
  // contact = {
  //   name: 'abc',
  //   email: 'abc@gmail.com',
  //   phone: '123456789',
  //   message: 'xin chào'
  // }
  // end FormsModule

  ngOnInit(): void {
  }

  getFormContact(data:any){
    this.service
    .contactForm(data.name, data.email, data.phone, data.message)
    .subscribe((kq)=>{
      console.log(kq);
    })
  }
  
}
