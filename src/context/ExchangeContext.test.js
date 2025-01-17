import * as ExchangeContext from './ExchangeContext';

const { exchangeReducer } = ExchangeContext;

describe('Exchange Reducer', () => {
  test('should set exchange rates', () => {
    const initialState = { rates: {} };
    const action = {
      type: 'SET_RATES',
      currency: 'USD',
      payload: { USD: 1.2 },
    };

    const newState = exchangeReducer(initialState, action);
    expect(newState.rates.USD).toEqual({ USD: 1.2 });
  });
});

test('should change current currency', () => {
  const initialState = { currentCurrency: 'USD' };
  const action = { type: 'SET_CURRENCY', payload: 'EUR' };

  const newState = exchangeReducer(initialState, action);
  expect(newState.currentCurrency).toBe('EUR');
});

test('should return the same state for unknown actions', () => {
  const initialState = { currentCurrency: 'USD' };
  const action = { type: 'UNKNOWN_ACTION' };

  const newState = exchangeReducer(initialState, action);
  expect(newState).toEqual(initialState);
});
