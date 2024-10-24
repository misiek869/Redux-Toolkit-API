const Product = require('./models/product-model')

const products = [
	{
		id: 'rec1JZlfCIBOPdcT2',
		title: 'Samsung Galaxy S8',
		price: '399.99',
		img: 'https://www.course-api.com/images/cart/phone-1.png',
		amount: 1,
	},
	{
		id: 'recB6qcHPxb62YJ75',
		title: 'Google Pixel',
		price: '499.99',
		img: 'https://www.course-api.com/images/cart/phone-2.png',
		amount: 1,
	},
	{
		id: 'recdRxBsE14Rr2VuJ',
		title: 'Xiaomi Redmi Note 2',
		price: '699.99',
		img: 'https://www.course-api.com/images/cart/phone-3.png',
		amount: 1,
	},
	{
		id: 'recwTo160XST3PIoW',
		title: 'Samsung Galaxy S7',
		price: '599.99',
		img: 'https://www.course-api.com/images/cart/phone-4.png',
		amount: 1,
	},
]

async function seedDatabase() {
	try {
		await Product.deleteMany({})
		await Product.insertMany(products)
		console.log('Dane zostały wprowadzone do bazy!')
	} catch (error) {
		console.error('Błąd podczas wprowadzania danych:', error)
	}
}

module.exports = seedDatabase
