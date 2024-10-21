import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    <section className="banner">
      <h1>Welcome to Business Transaction Software</h1>
      <p>Manage your transactions with ease and efficiency.</p>
      <Link to="/signup" className="banner-btn">Get Started</Link>
    </section>
  </div>
);

export default Home;