import express from 'express';
import { createCustomer, getCustomers, createCustomerOrder } from '../../controllers/form';

const router = express.Router();

router.post('/create', createCustomerOrder)
router.get('/all', getCustomers)

export default router;