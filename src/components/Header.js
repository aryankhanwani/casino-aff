import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      setIsMenuOpen(false); // Close menu on navigation
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isLeaderboard = currentHash === '#leaderboard';
  const isHome = currentHash === '' || currentHash === '#home';

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
          <a href="#home" className="logo-link">
            <div className="logo-square">AB</div>
            <div className="logo-text">ABCXYZ</div>
          </a>
        </div>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" className={`nav-link nav-link-home ${isHome ? 'active' : ''}`} onClick={handleNavClick}>
            Home
          </a>
          <a href="#leaderboard" className={`nav-link nav-link-leaderboard ${isLeaderboard ? 'active' : ''}`} onClick={handleNavClick}>
            Leaderboard
          </a>
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
