import './styles.css';

import React from 'react';

export default function CurrencyDropdown({ currency, onCurrencyChange, currencies }) {
  return (
    <select
      className="currency-dropdown"
      value={currency}
      onChange={(e) => onCurrencyChange(e.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency.symbol} value={currency.symbol}>
          {currency.symbol}
        </option>
      ))}
    </select>
  );
}
