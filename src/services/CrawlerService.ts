import request from 'request';
import fs from 'fs';
import cheerio from 'cheerio';

interface RequestDTO {
  url: string;
  limit: number;
}

class CrawlerService {
  public async execute({ url, limit }: RequestDTO) {
    const arr = [];
    await request(url, (err, res, body) => {
      if (err) console.log(err);
      else {
        const $ = cheerio.load(body);
        let cont = 0;
        $(
          'section.ui-search-results > ol.ui-search-layout > li.ui-search-layout__item > div.ui-search-result__wrapper > div.andes-card > div.ui-search-result__content-wrapper',
        ).each((i, element) => {
          if (cont !== limit) {
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

            let store = cheerioElement
              .find('a.ui-search-official-store-item__link > p')
              .text();
            if (store === '') store = null;

            let state = cheerioElement
              .find(
                'div.ui-search-result__content-columns > div > div.ui-search-item__group--details > span',
              )
              .text();
            if (state === '') state = null;

            const obj = {
              name,
              link,
              price: parseFloat(price),
              store,
              state,
            };
            // console.log(`${i}: ${JSON.stringify(obj)}`);
            // arr.push(JSON.stringify(obj));
            arr.push(obj);

            cont += 1;
          }
        });
        console.log(arr);
        // console.log(arr.toString());
        fs.writeFile('data.json', JSON.stringify(arr), err => {
          if (err) console.log(err);
          else console.log('Sucesso');
        });
      }
    });
    return arr;
  }
}

export default CrawlerService;
