import {ExchangeRate} from '@app/Types/ExchangeRate';
import {CurrencyState} from '@app/Context/Currency/reducer';

export const selectedExchangeRate = ({data, selected}: CurrencyState): ExchangeRate | undefined => {
  if (!data || data.length === 0) return undefined;

  return data.find(i => i.code === selected);
};

export const isLoading = ({data, error}: CurrencyState): boolean => {
  return data === undefined && error === undefined;
};
