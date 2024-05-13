import express from 'express';
import { createAdmin, authenticateAdmin } from '../controllers/admin';

const router = express.Router();

router.post('/create', createAdmin)
router.get('/auth/:username/:password', authenticateAdmin)

export default router;