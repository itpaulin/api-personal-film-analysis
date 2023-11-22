import { Request, Response } from 'express';
import { app } from '@/index.ts';

export const testController = (req: Request, res: Response) => res.send('Controller Works!');
