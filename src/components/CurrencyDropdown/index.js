import "./styles.css";

import React, { useState } from "react";
import { getCurrencies } from "utils";

const currencies = getCurrencies();

export default function CurrencyDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    if (event.type === "click" || event.key === "Enter" || event.key === " ") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className="currency-dropdown"
      role="button"
      tabIndex={0}
      onClick={toggleDropdown}
      onKeyDown={toggleDropdown}
    >
      <div className="currency-selected">
        <img
          src={`/assets/images/${value}.png`}
          srcSet={`
            /assets/images/${value}.png 1x, 
            /assets/images/${value}@2x.png 2x, 
            /assets/images/${value}@3x.png 3x
          `}
          alt={value}
          className="currency-icon"
        />
        <span>{value}</span>
        <span className="dropdown-arrow">▼</span>
      </div>

      {isOpen && (
        <ul className="currency-list">
          {currencies.map((curr) => (
            <li
              key={curr.symbol}
              role="menuitem"
              tabIndex={0}
              onClick={() => onChange(curr.symbol)}
              onKeyDown={(event) =>
                (event.key === "Enter" || event.key === " ") &&
                onChange(curr.symbol)
              }
            >
              <img
                src={`/assets/images/${curr.symbol}.png`}
                srcSet={`
                  /assets/images/${curr.symbol}.png 1x, 
                  /assets/images/${curr.symbol}@2x.png 2x, 
                  /assets/images/${curr.symbol}@3x.png 3x
                `}
                alt={curr.label}
                className="currency-icon"
              />
              {curr.symbol}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
