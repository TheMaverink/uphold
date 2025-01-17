import './styles.css';
import SDK from '@uphold/uphold-sdk-javascript';

import React, { useState } from 'react';

import Header from 'components/Header';
import InputAmount from 'components/InputAmount';
import CurrencyDropdown from 'components/CurrencyDropdown';
import ConversionsDisplay from 'components/ConversionsDisplay';

import { getCurrencies } from 'utils';

const DEFAULT_CURRENCY = 'USD';

const upholdSDK = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: 'public-client',
  clientSecret: 'public-secret',
});

const pairs = await upholdSDK.getTicker(DEFAULT_CURRENCY);

console.log('pairs');
console.log(pairs);

export default function CurrencyConverterPage() {
  const currencies = getCurrencies();

  const [currentAmount, setCurrentAmount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(DEFAULT_CURRENCY);

  return (
    <main className="currency-converter-page">
      <div className="page-content-wrapper">
        <img src="/assets/images/logo.svg" alt="Logo" />
        <Header />
        <div className="inputs-wrapper">
          <InputAmount value={currentAmount} setValue={setCurrentAmount} />
          <CurrencyDropdown
            value={currentCurrency}
            currencies={currencies}
            onChange={setCurrentCurrency}
          />
        </div>
      </div>
    </main>
  );
}
