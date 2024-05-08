import express from 'express';
import { createCustomer } from '../controllers/customers';

const router = express.Router();

router.post('/create', createCustomer)

export default router;