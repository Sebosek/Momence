import {useQuery} from 'react-query';
import {ExchangeRate} from '@app/Types/ExchangeRate';

const URL = 'https://cnbproxy.azurewebsites.net/api/proxyfn';

const parse = (line: string): ExchangeRate | null => {
  if (!line)
  {
    return null;
  }

  const parts = line.split('|');
  if (parts.length < 5)
  {
    return null;
  }

  const country: string = parts[0];
  const rate: number = parseFloat(parts[4]);
  const amount: number = parseInt(parts[2]);
  const code: string = parts[3];

  return ({
    value: rate / amount,
    country,
    code,
  });
};

const useExchangeRatesQuery = () => {
  return useQuery('exchange-rates', async (): Promise<Array<ExchangeRate>> => {
    const resp = await fetch(URL);
    const text = await resp.text();
    const cleared = text.trim();

    if (!cleared) {
      throw new Error('Invalid data format');
    }

    const rows = cleared.split("\n");
    if (rows.length < 3)
    {
      throw new Error('Invalid data format');
    }

    const parts = rows.slice(2, rows.length);
    return parts.map(parse).filter(item => item !== null).map(i => i as ExchangeRate);
  });
};

export default useExchangeRatesQuery;