'use strict'

const express = require('express')
const app = express()
const path = require('path')
const nunjucks = require('nunjucks')
const server = require('http').Server(app)
const io = require('socket.io')(server, {
	serveClient: true,
})
const mongoose = require('mongoose')
const bluebird = require('bluebird')
const passport = require('passport')
const { Strategy } = require('passport-jwt')

const { jwt } = require('./config')

passport.use(
	new Strategy(jwt, function(jwt_payload, done) {
		if (jwt_payload != void 0) return done(false, jwt_payload)
		done()
	})
)

mongoose.connect(
	'mongodb://localhost:27017/chat',
	{ useNewUrlParser: true }
)
mongoose.Promise = bluebird

nunjucks.configure('../views', {
	autoescape: true,
	express: app,
})
function checkAuth(req, res, next) {
	passport.authenticate(
		'jwt',
		{ session: false },
		(err, decryptToken, jwtError) => {
			if (jwtError != null || err != null)
				return res.render('index.html', { error: err || jwtError })
			req.user = decryptToken
			next()
		}
	)(req, res, next)
}

require('./sockets')(io)

server.listen(7777, '127.0.0.1', () => {
	console.log('server start on localhost:7777')
})
