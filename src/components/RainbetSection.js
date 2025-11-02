import React from 'react';
import './RainbetSection.css';

const RainbetSection = () => {
  return (
    <section className="rainbet-section">
      <div className="section-container">
        <div className="rainbet-card-container">
          <div className="partner-card rainbet-single">
            <div className="partner-logo-container">
              <img src="/rainbet.png" alt="Rainbet" className="rainbet-logo-image" />
            </div>
            <ul className="partner-features">
              <li className="partner-feature">
                <span className="feature-bullet">•</span>
                <span>$3,000 Monthly Affiliate Leaderboard</span>
              </li>
              <li className="partner-feature">
                <span className="feature-bullet">•</span>
                <span>250% in Deposit Bonuses + 60 Free Spins</span>
              </li>
              <li className="partner-feature">
                <span className="feature-bullet">•</span>
                <span>Exclusive Tips/Giveaways</span>
              </li>
              <li className="partner-feature">
                <span className="feature-bullet">•</span>
                <span>Up to 70% Back in Rewards</span>
              </li>
              <li className="partner-feature">
                <span className="feature-bullet">•</span>
                <span>No KYC Needed, VPN Friendly</span>
              </li>
              <li className="partner-feature">
                <span className="feature-bullet">•</span>
                <span>Instant Withdrawals</span>
              </li>
            </ul>
            <button className="btn-primary partner-btn">
              <span>Join Rainbet Now</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RainbetSection;
