import './styles.css';

import React from 'react';

const InputAmount = ({ value, setValue }) => {
  return (
    <input
      type="text"
      className="input-amount-number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputAmount;
