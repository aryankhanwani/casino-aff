import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLeaderboard = location.pathname === '/leaderboard';
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="header">
      <div className="header-container section-container">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <div className="logo-square">AB</div>
            <div className="logo-text">ABCXYZ</div>
          </Link>
        </div>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link nav-link-home ${isHome ? 'active' : ''}`} onClick={handleNavClick}>
            Home
          </Link>
          <Link to="/leaderboard" className={`nav-link nav-link-leaderboard ${isLeaderboard ? 'active' : ''}`} onClick={handleNavClick}>
            Leaderboard
          </Link>
          <button className="btn-login">
            <span className="login-icon">→</span>
            <span>Login</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
