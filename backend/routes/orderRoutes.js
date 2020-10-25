import express from 'express';
const router = express.Router();
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPiad } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').get(protect, updateOrderToPiad);

export default router;