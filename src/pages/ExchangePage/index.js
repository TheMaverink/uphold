import './styles.css';

import React, { useState, useContext } from 'react';

import ExchangeContext from 'context/ExchangeContext';

import Header from 'components/Header';
import InputAmount from 'components/InputAmount';
import CurrencyDropdown from 'components/CurrencyDropdown';
import ConversionsDisplay from 'components/ConversionsDisplay';

export default function ExchangePage() {
  //Review this, think in react 19 can be simplified
  const { state, dispatch } = useContext(ExchangeContext) || {};

  console.log('state');
  console.log(state);

  const { rates, currentCurrency } = state || {};

  const [currentAmount, setCurrentAmount] = useState(0);

  return (
    <main className="currency-converter-page">
      <div className="page-content-wrapper">
        <img src="/assets/images/logo.svg" alt="Logo" />
        <Header />
        <div className="inputs-wrapper">
          <InputAmount value={currentAmount} setValue={setCurrentAmount} />
          <CurrencyDropdown
            value={currentCurrency}
            onChange={(currency) =>
              dispatch({ type: 'SET_CURRENCY', payload: currency })
            }
          />
        </div>
      </div>
    </main>
  );
}
