const mongoose = require('mongoose')
const seedDatabase = require('../seed')

const connectDB = url => {
	return mongoose
		.connect(url)
		.then(() => {
			console.log('Połączono z MongoDB')
			return seedDatabase()
		})
		.catch(err => console.error('Błąd połączenia z MongoDB:', err))
}

module.exports = connectDB
