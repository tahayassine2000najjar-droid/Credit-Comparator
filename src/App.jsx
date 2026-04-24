import React from 'react';
import { offers } from './data/offers';
import CreditCard from './Component/Card';
import CompoundInterestCalculator from './Component/CompoundInterestCalculator';

function App() {
  const recommendedOfferId = offers.reduce((prev, curr) => {
    return (prev.interestRate < curr.interestRate) ? prev : curr;
  }).id;

  return (
    <div className="App">
      <h1>Credit Comparator</h1>
      
      <div className="card-container">
        {offers.map((offer) => (
          <CreditCard
            key={offer.id}
            offer={offer}
            isRecommended={offer.id === recommendedOfferId}
          />
        ))}
      </div>

      <hr style={{ margin: '40px 0' }} />

      <CompoundInterestCalculator />
    </div>
  );
}

export default App;
