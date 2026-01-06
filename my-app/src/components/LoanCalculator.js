import React, { useState } from 'react';
import './LoanCalculator.css';

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [tenureUnit, setTenureUnit] = useState('years');
  const [result, setResult] = useState(null);

   const calculateEMI = () => {
  const P = Number(loanAmount);
  const annualRate = Number(interestRate);
  let N = Number(tenure);

  if (P <= 0 || annualRate <= 0 || N <= 0) {
    alert("Please enter valid values");
    return;
  }

  // years → months
  if (tenureUnit === "years") {
    N = N * 12;
  }

  const R = annualRate / 12 / 100;

  const emi =
    (P * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1);

  const totalAmount = emi * N;
  const totalInterest = totalAmount - P;

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
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
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
