import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <div className="logo-square">AB</div>
              <div className="logo-text">ABCXYZ</div>
            </div>
            <p className="footer-description">
              <span>Community-driven gambling content and events. Partnered with Rainbet for exclusive</span>
              <span>rewards and leaderboard races.</span>
            </p>
            <div className="footer-badges">
              <div className="footer-badge">
                <span>18+ Play responsibly</span>
              </div>
              <div className="footer-badge">
                <span>Sponsor disclosures apply</span>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-columns">
              <div className="footer-column">
                <h4 className="footer-column-title">Links</h4>
                <ul className="footer-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/leaderboard">Leaderboard</Link></li>
                  <li><a href="#rainbet">Rainbet</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4 className="footer-column-title">Legal</h4>
                <ul className="footer-links">
                  <li><a href="#terms">Terms</a></li>
                  <li><a href="#privacy">Privacy</a></li>
                  <li><a href="#responsible">Responsible Gambling</a></li>
                  <li><a href="#disclosures">Disclosures</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-social">
              <a href="#twitter">Twitter</a>
              <a href="#kick">Kick</a>
              <a href="#discord">Discord</a>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 ABCXYZ. All rights reserved.</p>
          <div className="footer-social-bottom">
            <a href="#twitter">Twitter</a>
            <a href="#kick">Kick</a>
            <a href="#discord">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
