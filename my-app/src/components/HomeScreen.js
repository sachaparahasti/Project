import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div className="home-container">
      <h1 className="app-title">Loan & SIP Calculator</h1>
      <div className="nav-options">
        <Link to="/loan-calculator" className="nav-button">
          Loan Calculator
        </Link>
        <Link to="/sip-calculator" className="nav-button">
          SIP Calculator
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
