require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const users = require('./users');
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '../Client/build')));

const io = socketio(server, {
  cors: {
    "origin": "*",
    "methods": ["GET", "POST"],
    "preflightContinue": false
  }
});

app.use(cors());

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, '../Client/build', 'index.html');
  res.send(filePath);
});

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = users.addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: users.getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = users.getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });
    callback();
  });

  socket.on('disconnect', () => {
    const user = users.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: users.getUsersInRoom(user.room) });
    }
  });
});

server.listen(PORT, () => console.log(`Server Started on Port ${PORT} 🚀`));