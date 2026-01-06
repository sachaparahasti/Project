import React, { useState } from 'react';
import './LoanCalculator.css';

function LoanCalculator() {
  // State for loan inputs
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [tenureUnit, setTenureUnit] = useState('years'); // 'years' or 'months'
  const [result, setResult] = useState(null);

  // Calculate EMI using loan formula
  const calculateEMI = () => {
    const principal = Number(loanAmount);
    const annualRate = Number(interestRate);
    let tenureInMonths = Number(loanTenure);

    // Validate inputs
    if (principal <= 0 || annualRate <= 0 || tenureInMonths <= 0) {
      alert('Please enter valid positive values for all fields.');
      return;
    }

    // Convert years to months if needed
    if (tenureUnit === 'years') {
      tenureInMonths = tenureInMonths * 12;
    }

    // Calculate monthly interest rate (as a decimal)
    const monthlyRate = annualRate / 12 / 100;

    // Calculate EMI using the standard formula
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
      (Math.pow(1 + monthlyRate, tenureInMonths) - 1);

    // Calculate total payable amount and total interest
    const totalAmount = emi * tenureInMonths;
    const totalInterest = totalAmount - principal;

    // Set result with 2 decimal places
    setResult({
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    });
  };

  return (
    <div className="calculator-container">
      <h2>Loan Calculator</h2>

      <div className="input-group">
        <label>Loan Amount (₹)</label>
        <input
          type="number"
          placeholder="e.g. 500000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label>Interest Rate (% per annum)</label>
        <input
          type="number"
          placeholder="e.g. 8.5"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label>Loan Tenure</label>
        <div className="tenure-input">
          <input
            type="number"
            placeholder="e.g. 5"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            required
          />
          <select value={tenureUnit} onChange={(e) => setTenureUnit(e.target.value)}>
            <option value="years">Years</option>
            <option value="months">Months</option>
          </select>
        </div>
      </div>

      <button onClick={calculateEMI} className="calculate-btn">
        Calculate EMI
      </button>

      {result && (
        <div className="result-box">
          <h3>Results</h3>
          <div className="result-item">
            <span>Monthly EMI:</span>
            <strong>₹{result.emi}</strong>
          </div>
          <div className="result-item">
            <span>Total Interest Payable:</span>
            <strong>₹{result.totalInterest}</strong>
          </div>
          <div className="result-item">
            <span>Total Amount Payable:</span>
            <strong>₹{result.totalAmount}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
