import { Router } from 'express';
import crawlersRouter from './crawlers.routes';

const routes = Router();

routes.use('/crawlers', crawlersRouter);

export default routes;
