import {ExchangeRate} from '@app/Types/ExchangeRate';

export enum Actions {
  Loading = 'Loading data from API',
  Loaded = 'Data are loaded and ready',
  Error = 'An error occured',
  Select = 'Select currency to exchange',
}

export type Loading = {type: Actions.Loading};
export type Loaded = {type: Actions.Loaded, data: Array<ExchangeRate>};
export type Error = {type: Actions.Error, error: string};
export type Select = {type: Actions.Select, selected: string | undefined};

export const createLoading = (): Loading => ({type: Actions.Loading});
export const createLoaded = (data: Array<ExchangeRate>): Loaded => ({type: Actions.Loaded, data});
export const createError = (error: string): Error => ({type: Actions.Error, error});
export const createSelect = (selected: string | undefined): Select => ({type: Actions.Select, selected});

export type CurrencyActions
  = Loading
  | Loaded
  | Error
  | Select;
