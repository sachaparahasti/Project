import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LoanCalculator from './components/LoanCalculator';
import SipCalculator from './components/SipCalculator';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/loan-calculator" element={<LoanCalculator />} />
            <Route path="/sip-calculator" element={<SipCalculator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
