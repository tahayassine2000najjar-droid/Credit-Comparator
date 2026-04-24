import React from 'react';
import { calculateMonthlyPayment, calculateTotalCost } from '../utils/calculations';

const OfferDetails = ({ offer }) => {
  if (!offer) return null;

  const monthlyPayment = calculateMonthlyPayment(
    offer.amount,
    offer.interestRate,
    offer.durationYears
  );

  const totalCost = calculateTotalCost(monthlyPayment, offer.durationYears);

  return (
    <div className="details-section">
      <h2>Offer Details: {offer.provider}</h2>
      <p>Duration: <strong>{offer.durationYears} years</strong></p>
      <p>Monthly Payment: <strong>{monthlyPayment.toFixed(2)} €</strong></p>
      <p>Total Cost: <strong>{totalCost.toFixed(2)} €</strong></p>
    </div>
  );
};

export default OfferDetails;
