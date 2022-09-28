import {ExchangeRate} from '@app/Types/ExchangeRate';
import {Actions, CurrencyActions} from "@app/Context/Currency/actions";

export interface CurrencyState {
  data: Array<ExchangeRate> | undefined;
  error: string | undefined;
  selected: string | undefined;
}

export const reducer = (state: CurrencyState, action: CurrencyActions) => {
  switch (action.type) {
    case Actions.Loading: {
      return ({
        selected: undefined,
        error: undefined,
        data: undefined,
      });
    }
    case Actions.Loaded: {
      const {data} = action;
      
      return ({
        selected: undefined,
        error: undefined,
        data,
      });
    }
    case Actions.Error: {
      const {error} = action;

      return ({
        selected: undefined,
        data: undefined,
        error,
      });
    }
    case Actions.Select: {
      const {selected} = action;

      return ({
        ...state,
        selected,
      });
    }
    default:
      throw new Error('Undefined action');
  }
}
