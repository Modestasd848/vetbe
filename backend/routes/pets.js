import express from 'express';
import { createNewPet, getAllPets } from '../controllers/petController.js';
const router = express.Router();

router.get('/pets', getAllPets);
router.post('/pets', createNewPet);
router.delete('/pets/:id');

export default router;
