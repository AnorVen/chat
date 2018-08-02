'use strict'
const UsersModel = require('./models/users_model')

module.exports = app => {
	app.use('/assets', express.static('../public'))

	app.get('/', checkAuth, (req, res) => {
		res.render('index.html', {
			date: new Date(),
		})
	})

	app.post('/login', (req, res) => {})

	app.post('/register', (req, res) => {})
}
