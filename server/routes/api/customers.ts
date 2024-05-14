import express from 'express';
import { createCustomer, getNewCustomerOrders, createCustomerOrder } from '../../controllers/form';

const router = express.Router();

router.post('/create', createCustomerOrder)
router.get('/all', getNewCustomerOrders)

export default router;