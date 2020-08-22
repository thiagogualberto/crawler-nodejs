import { Router } from 'express';
import logger from '../logger';

import CrawlerService from '../services/CrawlerService';

const crawlersRouter = Router();

crawlersRouter.post('/', async (request, response) => {
  try {
    const { search, limit } = request.body;

    const searchFormat = search.replace(/ /g, '-');

    const url = `https://lista.mercadolivre.com.br/${searchFormat}#D[A:${search}]`;

    const crawlerService = new CrawlerService();

    const crawler = await crawlerService.execute({ url, limit });

    logger.info(`${limit} produtos coletados com sucesso.`);
    return response.status(200).json(crawler);
  } catch (err) {
    logger.error({ error: err.message });
    return response.status(400).json({ error: err.message });
  }
});

export default crawlersRouter;
