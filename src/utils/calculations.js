/**
 * Calculates the monthly payment for a credit.
 * @param {number} amount - Principal amount
 * @param {number} annualRate - Annual interest rate (in percentage)
 * @param {number} years - Duration in years
 * @returns {number} Monthly payment
 */
export const calculateMonthlyPayment = (amount, annualRate, years) => {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  if (monthlyRate === 0) return amount / numberOfPayments;

  const monthlyPayment =
    (amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return monthlyPayment;
};

/**
 * Calculates total cost of credit.
 * @param {number} monthlyPayment - Calculated monthly payment
 * @param {number} years - Duration in years
 * @returns {number} Total cost (capital + interest)
 */
export const calculateTotalCost = (monthlyPayment, years) => {
  return monthlyPayment * years * 12;
};

/**
 * Generates yearly evolution of capital with compound interest.
 * @param {number} principal - Initial capital
 * @param {number} annualRate - Annual interest rate (in percentage)
 * @param {number} years - Number of years
 * @returns {Array} Array of objects with year and balance
 */
export const calculateYearlyEvolution = (principal, annualRate, years) => {
  const evolution = [];
  let currentBalance = principal;
  const rate = annualRate / 100;

  evolution.push({ year: 0, balance: principal });

  for (let i = 1; i <= years; i++) {
    currentBalance = currentBalance * (1 + rate);
    evolution.push({ year: i, balance: currentBalance });
  }

  return evolution;
};
