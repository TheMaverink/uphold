import React from 'react';

export default function RatesListItem({ rate, amount, ticker }) {
  const amountConverted = (amount * rate).toFixed(6);
  return (
    <div className="rates-list-item">
      <span className="rates-list-item-amount">{amountConverted}</span>
      <div className="rates-list-item-currency">
        <img
          src={`/assets/images/${ticker}.png`}
          srcSet={`
                    /assets/images/${ticker}.png 1x, 
                    /assets/images/${ticker}@2x.png 2x, 
                    /assets/images/${ticker}@3x.png 3x
                  `}
          alt={ticker}
        />

        <span>{ticker}</span>
      </div>
    </div>
  );
}
