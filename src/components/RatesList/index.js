import "./styles.css";

import RatesListItem from "./RatesListItem";

const RatesList = ({ rates, currentAmount }) => {
  if (!rates) {
    return (
      <p className="rates-list-error">
        Unfortunately, no exchange rates were found for this currency.
      </p>
    );
  }

  if (!currentAmount) {
    return (
      <p className="rates-list-error">Enter an amount to check the rates.</p>
    );
  }

  return (
    <div className="rates-list">
      {rates.map(({ rate, pairSymbol }) => (
        <RatesListItem
          key={`rate-${pairSymbol}`}
          rate={rate}
          amount={currentAmount}
          ticker={pairSymbol}
        />
      ))}
    </div>
  );
};

export default RatesList;
