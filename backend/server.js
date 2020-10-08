import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config()
connectDB()

// Initiate express
const app = express();
//Include file extentions at the end of a file you import using es6 modules on the backend
import products from './data/products.js'

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    //return the json as a response
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(thing => thing._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`Running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold))
