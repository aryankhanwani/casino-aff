import React from 'react';
import './RogueJackSection.css';

const RogueJackSection = () => {
  return (
    <section className="roguejack-section">
      <div className="section-container">
        <div className="roguejack-video-card">
          <div className="video-header">
            <div className="video-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="video-title">RogueJack Highlights</div>
          </div>
          <div className="video-container">
            <img 
              src="http://localhost:3845/assets/40f75ed7ae4096e674ba3ab660a843dedb9a4b78.png"
              alt="RogueJack video"
              className="video-image"
            />
            <button className="play-button">
              <span className="play-icon">▶</span>
            </button>
          </div>
        </div>
        <div className="roguejack-content">
          <div className="roguejack-left">
            <div className="streamer-info">
              <div className="streamer-avatar">
                <img src="http://localhost:3845/assets/e8d6f2023475703cafec4fa88fa73662b8541b06.png" alt="RogueJack" />
              </div>
              <div className="streamer-details">
                <div className="streamer-name">RogueJack</div>
                <div className="streamer-followers">142,000 followers</div>
              </div>
            </div>
            <p className="roguejack-description">
              Catch the latest high-roller sessions, challenges, and community events. Watch live for real-time leaderboard pushes, giveaways, and bonus drops.
            </p>
          </div>
          <div className="roguejack-right">
            <button className="btn-green">
              <span>Watch on Kick</span>
              <span className="icon-simple">🔗</span>
            </button>
            <button className="btn-secondary">
              <span>Leaderboard</span>
              <span className="icon-simple">🏆</span>
            </button>
          </div>
        </div>
        <div className="roguejack-disclaimer-card">
          <span className="disclaimer-icon-simple">ℹ️</span>
          <p className="roguejack-disclaimer">
            Streams may include sponsored content. Wager responsibly. Need help? Visit the responsible gambling resources below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RogueJackSection;
