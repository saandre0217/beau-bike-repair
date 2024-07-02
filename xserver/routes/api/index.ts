import { Router } from "express";
import customerRoute from './customers'
const router = Router();

router.use('/customer', customerRoute)

export default router;