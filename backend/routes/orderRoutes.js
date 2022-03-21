import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import { addOrderItems } from '../controllers/orderController.js';

router.route('/').post(addOrderItems, protect);

export default router;
