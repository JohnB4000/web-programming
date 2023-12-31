const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var toDoId = 0;

io.on('connection', (socket) => {
  socket.on('new-to-do', (msg) => {
    io.emit('add-new-to-do', msg, toDoId++);
  });
  socket.on('delete-to-do', (id) => {
    io.emit('delete-to-do-item', id);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});