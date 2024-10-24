require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

app.use(express.json())

app.get('/', (req, res) => {
	res.send('<h1>Store API</h1>')
})

app

const port = process.env.PORT || 3000

const start = async () => {
	try {
		// connectDB
		await connectDB(process.env.MONGO_URI)
		app.listen(port, () => console.log(`Server is listening port ${port}...`))
	} catch (error) {
		console.log(error)
	}
}

start()
