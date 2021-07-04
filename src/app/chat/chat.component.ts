import { Component, OnInit } from '@angular/core';

// Gọi socket io
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    // gửi dữ liệu đi
    this.socket.emit('angular', 'hello angular');

    // nhận từ server
    this.socket
    .fromEvent('server')
    .subscribe((data:any)=>{
      console.log(data)
    })

  }

}
