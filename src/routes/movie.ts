import express, { Router, Request, Response } from 'express';
import * as Controller from '@/controllers/movie';

const router: Router = express.Router();

router.get('/', Controller.testController);

// router.post('/create-post', Controller.createPost)
export default router;
