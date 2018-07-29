"use strict";

const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  serveClient: true
});


io.on('connection', function (socket) {
  socket.emit('connected', 'connect ok');

  socket.join('all');

  socket.on('msg', content => {
    const obj ={
      date: new Date(),
      content: content,
      username: socket.id
    };
    socket.emit('message', obj);
    socket.to('all').emit('message', obj)
  })
});

nunjucks.configure('../views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.render('index.html',{
    date: new Date,

  });
});

app.use('/assets', express.static('../public'));

server.listen(7777, '127.0.0.1', ()=>{
  console.log('server start on localhost:7777');
});