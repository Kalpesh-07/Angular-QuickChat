const express = require('express');
const app =express();

const http = require('http');
const server = http.createServer(app);

const socketIo = require('socket.io');
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server has started on port : ${PORT}`));

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        console.log("On Join");
        console.log(data);
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('new user joined');
    });

    socket.on('message',(data) => {
        console.log("On message");
        console.log(data);
        io.in(data.room).emit('new message',{user : data.user, image : data.image, message: data.message});
    });
});