import express from 'express';
import {
  createNewMed,
  getAllMed,
} from '../controllers/medicationController.js';
const router = express.Router();

router.get('/medications', getAllMed);
router.post('/medications', createNewMed);

export default router;
