import React, {createContext, Dispatch, FunctionComponent, useContext, useEffect, useReducer} from 'react';
import {WithChildren} from '@app/Types/WithChildren';
import {createError, createLoaded, createLoading, CurrencyActions} from '@app/Context/Currency/actions';
import {CurrencyState, reducer} from '@app/Context/Currency/reducer';
import useExchangeRatesQuery from "@app/Hooks/useExchangeRatesQuery";

type Context = {
  dispatch: Dispatch<CurrencyActions>,
  state: CurrencyState,
};

const CurrencyContext = createContext<Context | undefined>(undefined);
export const CurrencyProvider: FunctionComponent<WithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    selected: undefined,
    error: undefined,
    data: undefined,
  });

  const query = useExchangeRatesQuery();
  
  useEffect(() => {
    const {status, error, data} = query;
    
    if (status === 'loading') dispatch(createLoading());
    if (status === 'error') dispatch(createError(error as string));
    if (status === 'success') dispatch(createLoaded(data));
  }, [query.status, query.error, query.data]);

  const value = {
    state,
    dispatch,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyStore = (): CurrencyState => {
  const ctx = useContext(CurrencyContext);
  if (ctx === undefined) {
    throw new Error("useAppState must be called inside the 'CurrencyContext'");
  }

  return ctx.state;
};

export const useCurrencyDispatch = (): Dispatch<CurrencyActions> => {
  const ctx = useContext(CurrencyContext);
  if (ctx === undefined) {
    throw new Error("useCurrencyDispatch must be called inside the 'CurrencyContext'");
  }

  return ctx.dispatch;
};

export const withCurrencyContext = <T extends object>(Component: React.ComponentType<T>) => (props: T) => (
  <CurrencyProvider>
    <Component {...props} />
  </CurrencyProvider>
);