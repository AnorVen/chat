'use strict'

const MessageModule = require('./models/messages_models')
module.exports = io => {
	io.on('connection', function(socket) {
		socket.emit('connected', 'connect ok')

		socket.join('all')

		socket.on('msg', content => {
			const obj = {
				date: new Date(),
				content: content,
				username: socket.id,
			}

			MessageModule.create(obj, err => {
				if (err) {
					return console.error('message model', err)
				}
				socket.emit('message', obj)
				socket.to('all').emit('message', obj)
			})
		})

		socket.on('receiveHistory', () => {
			MessageModule.find({})
				.sort({ date: -1 })
				.limit(50)
				.sort({ date: 1 })
				.lean()
				.exec((err, mgs) => {
					if (!err) {
						socket.emit('history', mgs)
					} else {
						return console.error('history model', err)
					}
				})
		})
	})
}