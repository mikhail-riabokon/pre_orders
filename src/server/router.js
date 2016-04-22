/* eslint-disable new-cap */
import renderInitialPage from './middlewares/renderInitialPage';
import express from 'express';

const router = express.Router();

// Write routes here
router.get('/', renderInitialPage);

export default router;
