import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isLeaderboard = currentHash === '#leaderboard';
  const isHome = currentHash === '' || currentHash === '#home';
  
  return (
    <header className="header">
      <div className="header-container section-container">
        <div className="header-left">
          <a href="#home" className="logo-link">
            <div className="logo-square">AB</div>
            <div className="logo-text">ABCXYZ</div>
          </a>
        </div>
        <nav className="header-nav">
          <a href="#home" className={`nav-link nav-link-home ${isHome ? 'active' : ''}`}>
            Home
          </a>
          <a href="#leaderboard" className={`nav-link nav-link-leaderboard ${isLeaderboard ? 'active' : ''}`}>
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
