import React from 'react';
import './Card.css';
import { calculateMonthlyPayment, calculateTotalCost } from '../utils/calculations';

const Card = ({ offer, isRecommended }) => {
  const cardNumber = `**** **** **** ${1000 + offer.id}`;
  

  const monthlyPayment = calculateMonthlyPayment(
    offer.amount,
    offer.interestRate,
    offer.durationYears
  );
  const totalCost = calculateTotalCost(monthlyPayment, offer.durationYears);

  return (
    <div className="card-wrapper">
     
      <input type="checkbox" id={`flip-${offer.id}`} className="flip-checkbox" />
      
      <div className="bank-card-inner">
        <div className={`bank-card-front ${offer.provider.toLowerCase()}`}>
          {isRecommended && <div className="recommended-badge">Recommended</div>}
          
          <div className="card-top">
            <div className="chip"></div>
            <div className="card-holder">{offer.provider.toUpperCase()}</div>
          </div>

          <div className="card-number">{cardNumber}</div>

          <div className="card-bottom">
            <div className="detail-item">
              <span className="label">Amount</span>
              <span className="value">{offer.amount} dhs</span>
            </div>
            <div className="detail-item">
              <span className="label">Rate</span>
              <span className="value">{offer.interestRate}%</span>
            </div>
           
            <label htmlFor={`flip-${offer.id}`} className="details-btn">
              Show Details
            </label>
          </div>
        </div>

  
        <div className={`bank-card-back ${offer.provider.toLowerCase()}`}>
          <div className="magnetic-strip"></div>
          <div className="details-content">
            <h3>Loan Breakdown</h3>
            <div className="stats">
              <p>Monthly: <strong>{monthlyPayment.toFixed(2)} dhs</strong></p>
              <p>Total: <strong>{totalCost.toFixed(2)} dhs</strong></p>
              <p>Duration: <strong>{offer.durationYears} Years</strong></p>
            </div>
            <label htmlFor={`flip-${offer.id}`} className="back-btn">
              Back to Card
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
