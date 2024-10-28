import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import StartTransaction from './components/StartTransaction';
import LandingPage from './components/LandingPage';  // Importing the LandingPage component
import './App.css';
import './assets/styles.css';  // Importing the global styles

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* LandingPage will be the default route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/start-transaction" element={<StartTransaction />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;