import './styles.css';

import React from 'react';

const InputAmount = ({ value, onValueChange }) => {
  return (
    <input
      type="number"
      className="input-amount-number"
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      placeholder="Enter amount"
    />
  );
};

export default InputAmount;
