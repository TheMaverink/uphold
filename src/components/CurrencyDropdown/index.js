import React, { useState } from "react";
import "./styles.css";

export default function CurrencyDropdown({ currency, onCurrencyChange, currencies }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="currency-dropdown" onClick={() => setIsOpen(!isOpen)}>
      <div className="currency-selected">
        <img src={currencies.find((c) => c.symbol === currency)?.icon} alt={currency} className="currency-icon" />
        <span>{currency}</span>
        <span className="dropdown-arrow">▼</span>
      </div>

      {isOpen && (
        <ul className="currency-list">
          {currencies.map((curr) => (
            <li key={curr.symbol} onClick={() => onCurrencyChange(curr.symbol)}>
              <img src={curr.icon} alt={curr.label} className="currency-icon" />
              {curr.symbol}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
