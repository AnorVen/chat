'use strict'

const MessageModule = require('./models/messages_models')
module.export = io => {
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
				if (error) {
					console.error('message model', err)
				}
				socket.emit('message', obj)
				socket.to('all').emit('message', obj)
			})
			socket.emit('message', obj)
			socket.to('all').emit('message', obj)
		})
	})
}
