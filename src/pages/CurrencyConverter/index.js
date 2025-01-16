import './styles.css';
import SDK from '@uphold/uphold-sdk-javascript';

import React, { useState } from 'react';

import Header from 'components/Header';
import InputAmount from 'components/InputAmount';
import CurrencyDropdown from 'components/CurrencyDropdown';
import ConversionsDisplay from 'components/ConversionsDisplay';

import { getCurrencies } from 'utils';

const upholdSDK = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: 'public-client',
  clientSecret: 'public-secret',
});

const pairs = await upholdSDK.getTicker('USD');

console.log('pairs');
console.log(pairs);

export default function CurrencyConverterPage() {
  const currencies = getCurrencies();

  return (
    <main className="currency-converter-page">
      <Header/>
      <div className="inputs-wrapper">
        <InputAmount />
        <CurrencyDropdown currencies={currencies} />
      </div>
    </main>
  );
}
