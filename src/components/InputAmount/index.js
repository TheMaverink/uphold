import './styles.css';

import React from 'react';

import { validateNumberInput } from 'utils';

const InputAmount = ({ value, setValue }) => {
  const handleTextInputChange = (event) => {
    const sanitizedTextValue = validateNumberInput(event.target.value);
    sanitizedTextValue && setValue(sanitizedTextValue);
  };

  return (
    <input
      type="text"
      className="input-amount-number"
      value={value}
      onChange={handleTextInputChange}
    />
  );
};

export default InputAmount;
