export const getCurrencies = () => {
  const currencies = [
    { label: "US Dollar", symbol: "USD" },
    { label: "Euro", symbol: "EUR" },
    { label: "British Pound", symbol: "GBP" },
    { label: "Japanese Yen", symbol: "JPY" },
    { label: "Australian Dollar", symbol: "AUD" },
    { label: "Canadian Dollar", symbol: "CAD" },
    { label: "Swiss Franc", symbol: "CHF" },
    { label: "Chinese Yuan", symbol: "CNY" },
    { label: "New Zealand Dollar", symbol: "NZD" },
    { label: "Indian Rupee", symbol: "INR" },
    { label: "Brazilian Real", symbol: "BRL" },
    { label: "Singapore Dollar", symbol: "SGD" },
    { label: "Mexican Peso", symbol: "MXN" },
    { label: "United Arab Emirates Dirham", symbol: "AED" },
  ];

  return currencies;
};

export const validateNumberInput = (value) => {
  let sanitizedValue = value.replace(/[^0-9.]/g, "");

  if ((sanitizedValue.match(/\./g) || []).length > 1) {
    sanitizedValue = sanitizedValue.slice(0, -1);
  }

  if (sanitizedValue.includes(".")) {
    const [integerPart, decimalPart] = sanitizedValue.split(".");
    sanitizedValue = `${integerPart}.${decimalPart.slice(0, 2)}`;
  }

  return sanitizedValue;
};

export const calculateMidpointRate = (ask, bid) =>
  (parseFloat(ask) + parseFloat(bid)) / 2;

export const formatNumber = (value) => {
  if (!value) return "";

  const [integerPart, decimalPart] = value.split(".");

  const formattedInteger = Number(integerPart).toLocaleString("en-US");

  return decimalPart !== undefined
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
};
