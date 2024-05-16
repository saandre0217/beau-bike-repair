import express from 'express';
import { createCustomer, getCustomerOrders, createCustomerOrder } from '../../controllers/form';

const router = express.Router();

router.post('/create', createCustomerOrder)
router.get('/:status', getCustomerOrders)

export default router;