import express from 'express';
import { createAdmin } from '../controllers/admin';

const router = express.Router();

router.post('/create', createAdmin)
//router.get('/all', getCustomers)

export default router;