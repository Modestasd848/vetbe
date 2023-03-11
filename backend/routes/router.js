import express from 'express';
import { handleRouteNotFound } from '../middleware/middleware.js';
import petsRouter from './pets.js';
import logsRouter from './logs.js';
import medicationsRouter from './medications.js';
import prescriptionsRouter from './prescriptions.js';

const router = express.Router();

router.use(
  '/v1',
  petsRouter,
  logsRouter,
  medicationsRouter,
  prescriptionsRouter
);

router.all('*', handleRouteNotFound);

export default router;
