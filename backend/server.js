import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
//Include file extentions at the end of a file you import using es6 modules on the backend
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

// Initiate express!
const app = express();
app.use(express.json())
app.get('/', (req, res, next) => {
    console.log(req.originalUrl)
    next()
})

app.get('/', (req, res) => {
    res.send('API is running...')
})

// All product and user routes will be used on these endpoints. one more
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
// Use your middleware that you imported
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`Running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold))

// NB: remember to delete data:destroy and the other thing from package.json towards the end of project