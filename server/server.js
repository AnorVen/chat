"use strict";

const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  serveClient: true
});
const mongoose = require('mongoose');
const bluebird = require('bluebird');





mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true});
mongoose.Promise = bluebird;



nunjucks.configure('../views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.render('index.html',{
    date: new Date,

  });
});

require('./sockets');

app.use('/assets', express.static('../public'));

server.listen(7777, '127.0.0.1', ()=>{
  console.log('server start on localhost:7777');
});