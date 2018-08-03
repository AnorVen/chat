'use strict';

const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const server = require('http').Server(app);
const io = require('socket.io')(server, {
	serveClient: true,
});
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const { Strategy } = require('passport-jwt');
const { jwt } = require('./config');

passport.use(
	new Strategy(jwt, function(jwt_payload, done) {
		if (jwt_payload != void 0) return done(false, jwt_payload);
		done();
	})
);

mongoose.connect(
	'mongodb://localhost:27017/chat',
	{ useNewUrlParser: true }
);
mongoose.Promise = bluebird;
mongoose.set('debug', true);

nunjucks.configure('../views', {
	autoescape: true,
	express: app,
});

require('./sockets')(io);
require('./router')(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

server.listen(7777, '127.0.0.1', () => {
	console.log('server start on localhost:7777');
});
