import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js'

//  CREATE NEW ORDER
//  POST /api/orders

const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems, shippingAddress, paymentMethod,
        itemsPrice, taxPrice, shippingPrice, totalPrice
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return
    } else {
        const order = new Order({
            orderItems, shippingAddress, paymentMethod,
            itemsPrice, taxPrice, shippingPrice, totalPrice
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

// Get order by Id
const getOrderById = asyncHandler(async (req, res) => {
    const order = await (await Order.findById(req.params.id)).populate('user', 'name email')

    if (order) res.json(order)
    else {
        res.status(404)
        throw new Error('order not found')
    }
})
export { addOrderItems, getOrderById }