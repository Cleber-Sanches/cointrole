import { Router, Request, Response } from 'express';

export const indexRoutes = Router();

indexRoutes.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});
