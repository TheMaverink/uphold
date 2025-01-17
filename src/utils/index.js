export const getCurrencies = () => {
  const currencies = [
    { label: 'US Dollar', symbol: 'USD', default: true },
    { label: 'Euro', symbol: 'EUR' },
    { label: 'British Pound', symbol: 'GBP' },
    { label: 'Japanese Yen', symbol: 'JPY' },
    { label: 'Australian Dollar', symbol: 'AUD' },
    { label: 'Canadian Dollar', symbol: 'CAD' },
    { label: 'Swiss Franc', symbol: 'CHF' },
    { label: 'Chinese Yuan', symbol: 'CNY' },
    { label: 'Swedish Krona', symbol: 'SEK' },
    { label: 'New Zealand Dollar', symbol: 'NZD' },
    { label: 'Indian Rupee', symbol: 'INR' },
    { label: 'Brazilian Real', symbol: 'BRL' },
    { label: 'South African Rand', symbol: 'ZAR' },
    { label: 'Russian Ruble', symbol: 'RUB' },
  ];

  return currencies;
};

export const validateNumberInput = (value) => {
  let sanitizedValue = value.replace(/[^0-9.]/g, '');

  if ((sanitizedValue.match(/\./g) || []).length > 1) {
    sanitizedValue = sanitizedValue.slice(0, -1);
  }

  if (sanitizedValue.includes('.')) {
    const [integerPart, decimalPart] = sanitizedValue.split('.');
    sanitizedValue = `${integerPart}.${decimalPart.slice(0, 2)}`;
  }

  return sanitizedValue;
};
