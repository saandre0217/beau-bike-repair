import express from 'express';
import { createCustomer, getCustomers } from '../../controllers/form';

const router = express.Router();

router.post('/create', createCustomer)
router.get('/all', getCustomers)

export default router;