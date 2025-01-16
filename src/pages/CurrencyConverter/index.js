import './styles.css';
import SDK from '@uphold/uphold-sdk-javascript';

import React, { useState } from 'react';

import InputAmount from 'components/InputAmount';
import CurrencyDropdown from 'components/CurrencyDropdown';
import ConversionsDisplay from 'components/ConversionsDisplay';

import { getCurrencies } from 'utils';

const upholdSDK = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: 'foo',
  clientSecret: 'bar',
});

const pairs = await upholdSDK.getTicker('USD');

console.log('pairs');
console.log(pairs);

export default function CurrencyConverterPage() {
  const currencies = getCurrencies();

  return (
    <main className="currency-converter-page">
      <div className="inputs-wrapper">
        <InputAmount />
        <CurrencyDropdown currencies={currencies} />
      </div>
    </main>
  );
}
