const Product = require('../models/product')

const getAllProducts = async (req, res) => {
	res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
	getAllProducts,
}
