import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const topPlayers = [
    { rank: 1, username: 'NovaAce', handle: '@nova', wagered: '$1,204,980' },
    { rank: 2, username: 'RedMonk', handle: '@rmonk', wagered: '$984,210' },
    { rank: 3, username: 'LuckyV', handle: '@luckyv', wagered: '$802,445' },
    { rank: 4, username: 'ChipZero', handle: '@czero', wagered: '$640,120' },
    { rank: 5, username: 'RubyEdge', handle: '@ruby', wagered: '$598,730' },
  ];

  return (
    <section className="hero">
      <div className="section-container">
        <div className="hero-content-new">
          {/* Big Logo */}
          <div className="hero-logo-big">
            <img src="/icon crystal.png" alt="Crystal Logo" className="hero-crystal-logo" />
          </div>

          {/* Hero Title */}
          <h1 className="hero-title-main">
            Win Big with Monthly Wager Leaderboard
          </h1>

          {/* Hero Subtext */}
          <p className="hero-subtext">
            Join the ultimate gaming experience with our exclusive casino partners. Wager, climb, and claim your share of the prize pool.
          </p>

          {/* $50,000 Stat */}
          <div className="hero-stat-prominent">
            <div className="stat-value-large">$50,000</div>
            <div className="stat-label-large">Monthly Prize Pool</div>
          </div>

          {/* Leaderboard Preview - Mac Window Style */}
          <div className="hero-leaderboard-preview mac-window">
            <div className="mac-window-header">
              <div className="mac-window-controls">
                <span className="mac-control mac-control-close"></span>
                <span className="mac-control mac-control-minimize"></span>
                <span className="mac-control mac-control-maximize"></span>
              </div>
              <div className="mac-window-title">Monthly Wagered Leaderboard</div>
            </div>
            <div className="mac-window-content">
              <div className="leaderboard-header-new">
                <Link to="/leaderboard" className="view-full-link-new">View full board →</Link>
              </div>
              <div className="leaderboard-list-new">
                {topPlayers.map((player) => (
                  <div key={player.rank} className={`leaderboard-item-new ${player.rank !== 1 ? 'with-border-new' : ''}`}>
                    <div className="player-info-new">
                      <div className="player-rank-new">{player.rank}</div>
                      <div className="player-avatar-new">
                        <img 
                          src={`http://localhost:3845/assets/${player.rank === 1 ? 'fdffd0f2bf1b460b6bdacf5a7856de526fff159d' : player.rank === 3 ? 'e8d6f2023475703cafec4fa88fa73662b8541b06' : player.rank === 4 ? 'babd8f1a9c80504248b1f8b58cf4c3da8b7373dd' : '950fe9ac02d03a66a32b45ece93ef5b87cc58b2a'}.png`}
                          alt={player.username}
                        />
                      </div>
                      <div className="player-details-new">
                        <div className="player-name-new">{player.username}</div>
                        <div className="player-handle-new">{player.handle}</div>
                      </div>
                    </div>
                    <div className="player-wagered-new">{player.wagered}</div>
                  </div>
                ))}
              </div>
              <div className="leaderboard-footer-new">
                <span className="updated-time-new">Updated 2m ago</span>
                <a href="#login" className="login-link-new">Log in to track your position</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
