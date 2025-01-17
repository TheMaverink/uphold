import React, { createContext, useReducer, useEffect, useRef } from 'react';
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
      return {
        ...state,
        rates: { ...state.rates, [action.currency]: action.payload },
      };
    case 'SET_CURRENCY':
      return { ...state, currentCurrency: action.payload };
    default:
      return state;
  }
};

export function ExchangeRatesProvider({ children }) {
  const isFetching = useRef(false);

  const initialState = {
    rates: {},
    currentCurrency: DEFAULT_CURRENCY,
  };

  const [state, dispatch] = useReducer(exchangeReducer, initialState);

  useEffect(() => {
    async function fetchRates() {
      if (isFetching.current) return;
      isFetching.current = true;

      try {
        const selectedCurrency = state.currentCurrency || DEFAULT_CURRENCY;

        if (state.rates[selectedCurrency]) {
          console.log('Using cached rates for:', selectedCurrency);
          return;
        }

        console.log('Fetching exchange rates for:', selectedCurrency);
        const data = await upholdSDK.getTicker(selectedCurrency);

        dispatch({
          type: 'SET_RATES',
          currency: selectedCurrency,
          payload: data,
        });
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      } finally {
        isFetching.current = false;
      }
    }

    fetchRates();
  }, [state.currentCurrency]);

  useEffect(() => {
    async function updateRates() {
      try {
        const selectedCurrency = state.currentCurrency || DEFAULT_CURRENCY;

        console.log(
          'Updating exchange rates in background for:',
          selectedCurrency
        );
        const data = await upholdSDK.getTicker(selectedCurrency);

        dispatch({
          type: 'SET_RATES',
          currency: selectedCurrency,
          payload: data,
        });
      } catch (error) {
        console.error('Error updating exchange rates:', error);
      }
    }

    if (state.rates[state.currentCurrency]) {
      updateRates();
    }
  }, [state.currentCurrency]);

  return (
    <ExchangeContext.Provider value={{ state, dispatch }}>
      {children}
    </ExchangeContext.Provider>
  );
}

export default ExchangeContext;
