import React from 'react';
import './ViewLeaderboardSection.css';

const ViewLeaderboardSection = () => {
  return (
    <section className="view-leaderboard-section">
      <div className="section-container">
        <div className="view-leaderboard-card">
          <div className="view-leaderboard-content">
            <div className="view-leaderboard-left">
              <h2 className="section-title-small">View your leaderboard</h2>
              <p className="section-description-small">
                Log in to link your Rainbet account and track your real-time rank, wagers, and rewards.
              </p>
            </div>
            <div className="view-leaderboard-right">
              <button className="btn-primary">
                <span>Login</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                <span>Connect Rainbet</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7L17 3M17 3L13 3M17 3L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 11V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewLeaderboardSection;
