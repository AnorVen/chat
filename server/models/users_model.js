'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const UserSchema = new Schema(
	{
		username: { type: String },
		password: { type: String },
		data: { type: Date, default: Date.now },
	},
	{
		versionKey: false,
		collection: 'UsersCollection',
	}
)

UserSchema.pre('save', function(next) {
	if (this.isModified('password') || this.isNew) {
		this.password = bcrypt.hashSync(this.password, 12)
		next()
	}
})

module.exports = mongoose.model('UsersCollection', UserSchema)
