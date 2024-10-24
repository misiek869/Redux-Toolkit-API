const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
	title: String,
	price: String,
	img: String,
	amount: Number,
})

module.exports = mongoose.model('Product', productSchema)
