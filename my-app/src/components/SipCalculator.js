import React, { useState } from "react";
import "./SipCalculator.css";

function SipCalculator() {
  // State for SIP inputs
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [annualReturnRate, setAnnualReturnRate] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");
  const [durationUnit, setDurationUnit] = useState("years"); // "years" or "months"
  const [result, setResult] = useState(null);

  // Calculate SIP returns
  const calculateSIP = () => {
    const monthly = Number(monthlyInvestment);
    const rate = Number(annualReturnRate);
    let months = Number(investmentDuration);

    // Validate inputs
    if (monthly <= 0 || rate <= 0 || months <= 0) {
      alert("Please enter valid positive values for all fields.");
      return;
    }

    // Convert years to months if needed
    if (durationUnit === "years") {
      months = months * 12;
    }

    // Calculate monthly rate (as a decimal)
    const monthlyRate = rate / 12 / 100;

    // Calculate future value using SIP formula
    const futureValue =
      monthly *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

    // Calculate total investment and returns
    const totalInvestment = monthly * months;
    const totalReturns = futureValue - totalInvestment;

    // Set result with 2 decimal places
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
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Expected Annual Return (%)</label>
        <input
          type="number"
          placeholder="e.g. 12"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Investment Duration</label>
        <div className="tenure-input">
          <input
            type="number"
            placeholder="e.g. 10"
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(e.target.value)}
          />
          <select value={durationUnit} onChange={(e) => setDurationUnit(e.target.value)}>
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
