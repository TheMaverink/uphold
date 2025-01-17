import './styles.css';
import React, { useEffect, useState } from 'react';

import { validateNumberInput } from 'utils';

const DELAY = 300;

const InputAmount = ({ value, setValue }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(inputValue);
    }, DELAY);

    return () => clearTimeout(handler);
  }, [inputValue, setValue]);

  const handleTextInputChange = (event) => {
    const sanitizedTextValue = validateNumberInput(event.target.value);
    if (sanitizedTextValue) {
      setInputValue(sanitizedTextValue);
    }
  };

  return (
    <input
      type="text"
      className="input-amount-number"
      value={inputValue}
      onChange={handleTextInputChange}
    />
  );
};

export default InputAmount;
