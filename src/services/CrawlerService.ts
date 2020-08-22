import request from 'request';
import fs from 'fs';
import cheerio from 'cheerio';
import logger from '../logger';

interface RequestDTO {
  url: string;
  limit: number;
}

interface ProductDTO {
  name: string;
  link: string;
  price: number;
  store: string;
  state: string;
}

class CrawlerService {
  public async execute({ url, limit }: RequestDTO): Promise<ProductDTO[]> {
    return new Promise((resolve, reject) => {
      request(url, (err, res, body) => {
        if (!err) {
          const $ = cheerio.load(body);
          let arr: Array<ProductDTO> = $(
            'section.ui-search-results > ol.ui-search-layout > li.ui-search-layout__item > div.ui-search-result__wrapper > div.andes-card > div.ui-search-result__content-wrapper',
          )
            .slice(0, limit)
            .map((i, element) => {
              const cheerioElement = $(element);
              const name = cheerioElement.find('a').attr('title');
              const link = cheerioElement.find('a').attr('href');
              const partInt = cheerioElement
                .find(
                  'div.ui-search-item__group--price > div > div > span > span.price-tag-fraction',
                )
                .text();
              const partDec = cheerioElement
                .find(
                  'div.ui-search-item__group--price > div > div > span > span.price-tag-cents',
                )
                .text();

              const price = `${partInt}.${partDec}`;

              let store = <string | null>(
                cheerioElement
                  .find('a.ui-search-official-store-item__link > p')
                  .text()
              );
              if (store === '') store = null;

              let state = <string | null>(
                cheerioElement
                  .find(
                    'div.ui-search-result__content-columns > div > div.ui-search-item__group--details > span',
                  )
                  .text()
              );
              if (state === '') state = null;

              return <ProductDTO>{
                name,
                link,
                price: parseFloat(price),
                store,
                state,
              };
            })
            .get();

          // Salva os dados coletados no arquivo data.json
          fs.writeFile('data.json', JSON.stringify(arr, null, 2), error => {
            if (error) logger.error(error);
            else logger.info('Arquivo data.json criado com sucesso');
          });

          resolve(arr);
        }
        reject();
      });
    });
  }
}

export default CrawlerService;
