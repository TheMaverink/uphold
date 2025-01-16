import SDK from '@uphold/uphold-sdk-javascript';

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

export const getUpholdSDK = () =>
  new SDK({
    baseUrl: process.env.REACT_APP_UPHOLD_BASE_URL,
    clientId: process.env.REACT_APP_UPHOLD_CLIENT_ID,
    clientSecret: process.env.REACT_APP_UPHOLD_SECRET_ID,
  });
