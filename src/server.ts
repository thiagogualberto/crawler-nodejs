import express from 'express';
import pinohttp from 'pino-http';
import routes from './routes';
import logger from './logger';

const pino = pinohttp({
  logger,
});

const app = express();

app.use(express.json());

app.use(pino);

app.use(routes);

app.listen(3333, () => {
  logger.info('Server started on port 3333.');
});
