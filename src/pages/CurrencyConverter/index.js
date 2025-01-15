import './styles.css';

import React from 'react';

import InputAmount from 'components/InputAmount';
import CurrencyDropdown from 'components/CurrencyDropdown';
import ConversionsDisplay from 'components/ConversionsDisplay';

import {getCurrencies} from 'utils'

export default function CurrencyConverterPage() {

  const currencies = getCurrencies()

  return (
    <main className="currency-converter-page">
      <div className="inputs-wrapper">
        <InputAmount />
        <CurrencyDropdown currencies={currencies}/>
      </div>
    </main>
  );
}
