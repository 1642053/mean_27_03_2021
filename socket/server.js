const express = require('express');
const app = express();

// gọi socket io
const server = require('http').Server(app);
//const io = require('socket.io')(server);

// cấu hình giúp angular kết nói tới socket
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true
    }
}) 

// on: nhận
// emit: gửi

// kiểm tra kết nối
io.on('connection', (socket)=>{

    console.log(socket.id + ' online' );

    // nhận giá trị từ key: angular
    socket.on('angular', (data)=>{
        console.log(data);

        io.sockets.emit('server', data);
    })

    // tắt kết nối
    socket.on('disconnect', ()=>{
        console.log( socket.id + ' đã thoát' );
    })
})

server.listen(4000, ()=>{
    console.log('Socket đã bật');
});