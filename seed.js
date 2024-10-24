const Product = require('./models/product-model')

const products = [
	{
		title: 'LEGO ICONS Corvette',
		price: '99.99',
		img: 'https://i.postimg.cc/qqsQrrNf/LEGO-10321-ICONS-Corvette-glowne.webp',
		amount: 1,
	},
	{
		title: 'LEGO Batmobile',
		price: '139.99',
		img: 'https://i.postimg.cc/wTkFb6KL/LEGO-76328-DC-Batman.webp',
		amount: 1,
	},
	{
		title: 'LEGO Ghostbusters Vehicle',
		price: '79.99',
		img: 'https://i.postimg.cc/dtF4BhfJ/LEGO-Creator-ECTO-1-Ghostbusters.webp',
		amount: 1,
	},
	{
		title: 'LEGO ICONS Porsche 911',
		price: '119.99',
		img: 'https://i.postimg.cc/kMKTKQfj/LEGO-Creator-Porsche-911.webp',
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
