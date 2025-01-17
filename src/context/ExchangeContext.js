import React, { createContext, useReducer, useEffect } from 'react';
import SDK from '@uphold/uphold-sdk-javascript';

const upholdSDK = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: 'public-client',
  clientSecret: 'public-secret',
});

const DEFAULT_CURRENCY = 'USD';

const ExchangeContext = createContext(null);

const exchangeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RATES':
      localStorage.setItem('exchangeRates', JSON.stringify(action.payload));
      return { ...state, rates: action.payload };
    case 'SET_CURRENCY':
      console.log('action.payload')
      console.log(action.payload)
      localStorage.setItem('currentCurrency', action.payload);
      return { ...state, currentCurrency: action.payload };
    default:
      return state;
  }
};

export function ExchangeRatesProvider({ children }) {
  const initialState = {
    rates: JSON.parse(localStorage.getItem('exchangeRates')) || {},
    currentCurrency: localStorage.getItem('currentCurrency') || DEFAULT_CURRENCY,
  };

  const [state, dispatch] = useReducer(exchangeReducer, initialState);

  useEffect(() => {
    async function fetchRates() {
      try {
        const data = await upholdSDK.getTicker(DEFAULT_CURRENCY);

        dispatch({ type: 'SET_RATES', payload: data });
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    }

    fetchRates();
  }, [state.currentCurrency]);

  return (
    <ExchangeContext.Provider value={{ state, dispatch }}>
      {children}
    </ExchangeContext.Provider>
  );
}


export default ExchangeContext;
