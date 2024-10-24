const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
	id: { type: String },
	title: {
		type: String,
	},
	price: {
		type: String,
	},
	img: {
		type: String,
	},
	amount: {
		type: Number,
	},
})

module.exports = mongoose.model('Product', productSchema)
