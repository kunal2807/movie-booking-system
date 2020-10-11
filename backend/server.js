import express from 'express'
import dotenv from 'dotenv'
//Include file extentions at the end of a file you import using es6 modules on the backend
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

// Initiate express
const app = express();

app.get('/', (req, res, next) => {
    console.log(req.originalUrl)
    next()
})

app.get('/', (req, res) => {
    res.send('API is running...')
})

// All product routes will be used on this endpoint
app.use('/api/products', productRoutes)
// Use your middleware that you imported
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`Running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold))

// NB: remember to delete data:destroy and the other thing from package.json towards the end of project