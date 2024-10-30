import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import StartTransaction from './components/StartTransaction';
import LandingPage from './components/LandingPage';
import './App.css';
import './assets/styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* LandingPage will be the default route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/start-transaction" element={<StartTransaction />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
