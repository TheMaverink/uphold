import "./styles.css";
import React, { useEffect, useState } from "react";

import { validateNumberInput, formatNumber } from "utils";

const DEBOUNCE_TIME = 300;

const InputAmount = ({ value, setValue }) => {
  const [inputValue, setInputValue] = useState(formatNumber(value));

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(inputValue.replace(/,/g, ""));
    }, DEBOUNCE_TIME);

    return () => clearTimeout(handler);
  }, [inputValue, setValue]);

  const handleTextInputChange = (event) => {
    let sanitizedTextValue = validateNumberInput(event.target.value);

    if (sanitizedTextValue) {
      sanitizedTextValue = sanitizedTextValue.replace(/^0+(?!(\.|$))/, "");
    }

    setInputValue(formatNumber(sanitizedTextValue));
  };

  return (
    <input
      type="text"
      className="input-amount-number"
      value={inputValue}
      onChange={handleTextInputChange}
      placeholder="0.00"
    />
  );
};

export default InputAmount;
