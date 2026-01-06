import React, { useState } from "react";
import "./LoanCalculator.css";

function SipCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [tenureUnit, setTenureUnit] = useState("years");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    let monthly = Number(monthlyAmount);
    let rate = Number(returnRate);
    let months = Number(tenure);

    // validation
    if (monthly <= 0 || rate <= 0 || months <= 0) {
      alert("Please enter valid values");
      return;
    }

    // convert years to months
    if (tenureUnit === "years") {
      months = months * 12;
    }

    let monthlyRate = rate / 12 / 100;

    let futureValue =
      monthly *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    let totalInvestment = monthly * months;
    let totalReturns = futureValue - totalInvestment;

    setResult({
      futureValue: futureValue.toFixed(2),
      totalInvestment: totalInvestment.toFixed(2),
      totalReturns: totalReturns.toFixed(2),
    });
  };

  return (
    <div className="calculator-container">
      <h2>SIP Calculator</h2>

      <div className="input-group">
        <label>Monthly Investment (₹)</label>
        <input
          type="number"
          placeholder="e.g. 5000"
          value={monthlyAmount}
          onChange={(e) => setMonthlyAmount(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Expected Annual Return (%)</label>
        <input
          type="number"
          placeholder="e.g. 12"
          value={returnRate}
          onChange={(e) => setReturnRate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Investment Duration</label>
        <div className="tenure-input">
          <input
            type="number"
            placeholder="e.g. 10"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            required
          />
          <select
            value={tenureUnit}
            onChange={(e) => setTenureUnit(e.target.value)}
          >
            <option value="years">Years</option>
            <option value="months">Months</option>
          </select>
        </div>
      </div>

      <button onClick={calculateSIP} className="calculate-btn">
        Calculate SIP
      </button>

      {result && (
        <div className="result-box">
          <h3>Results</h3>
          <div className="result-item">
            <span>Total Investment:</span>
            <strong>₹{result.totalInvestment}</strong>
          </div>
          <div className="result-item">
            <span>Total Returns:</span>
            <strong>₹{result.totalReturns}</strong>
          </div>
          <div className="result-item">
            <span>Future Value:</span>
            <strong>₹{result.futureValue}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default SipCalculator;
