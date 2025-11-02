import React, { useState, useEffect } from 'react';
import './LeaderboardPage.css';

const LeaderboardPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 10,
    minutes: 12,
    seconds: 29
  });
  const [activeTab, setActiveTab] = useState('active');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Top 3 players - reordered to show rank 1 in center
  const top3Players = [
    {
      rank: 2,
      username: 'Ice********6',
      avatar: 'I6',
      wagered: '$2,050.09',
      prize: '$600'
    },
    {
      rank: 1,
      username: 'wat************',
      avatar: 'WR',
      wagered: '$2,786.70',
      prize: '$900'
    },
    {
      rank: 3,
      username: 'KOS****S',
      avatar: 'KS',
      wagered: '$1,844.06',
      prize: '$400'
    }
  ];

  // Active leaderboard
  const activeRankings = [
    { rank: 4, username: 'Yon*****d', avatar: 'YD', wagered: '$1,771.40', prize: '$300' },
    { rank: 5, username: 'Big*****r', avatar: 'BR', wagered: '$1,650.25', prize: '$250' },
    { rank: 6, username: 'Cas*****o', avatar: 'CO', wagered: '$1,523.18', prize: '$200' },
    { rank: 7, username: 'Win*****t', avatar: 'WT', wagered: '$1,450.90', prize: '$150' },
    { rank: 8, username: 'Luc*****y', avatar: 'LY', wagered: '$1,320.75', prize: '$125' },
    { rank: 9, username: 'Jam*****s', avatar: 'JS', wagered: '$1,210.50', prize: '$100' },
    { rank: 10, username: 'Ace*****e', avatar: 'AE', wagered: '$1,150.25', prize: '$75' },
    { rank: 11, username: 'Pro*****r', avatar: 'PR', wagered: '$1,080.40', prize: null },
    { rank: 12, username: 'Mas*****r', avatar: 'MR', wagered: '$1,020.15', prize: null },
    { rank: 13, username: 'Vip*****r', avatar: 'VR', wagered: '$980.50', prize: null },
    { rank: 14, username: 'Top*****r', avatar: 'TR', wagered: '$940.25', prize: null },
    { rank: 15, username: 'Elite***e', avatar: 'EE', wagered: '$900.10', prize: null }
  ];

  // Previous leaderboard top 3
  const previousTop3 = [
    {
      rank: 2,
      username: 'Top*****e',
      avatar: 'TE',
      wagered: '$2,850.25',
      prize: '$800'
    },
    {
      rank: 1,
      username: 'Win*****r',
      avatar: 'WR',
      wagered: '$3,200.50',
      prize: '$1,200'
    },
    {
      rank: 3,
      username: 'Elite***r',
      avatar: 'ER',
      wagered: '$2,650.00',
      prize: '$500'
    }
  ];

  // Previous leaderboard rankings
  const previousRankings = [
    { rank: 4, username: 'Ace*****e', avatar: 'AE', wagered: '$2,400.75', prize: '$300' },
    { rank: 5, username: 'Vip*****r', avatar: 'VR', wagered: '$2,250.50', prize: '$250' },
    { rank: 6, username: 'Pro*****r', avatar: 'PR', wagered: '$2,100.25', prize: '$200' },
    { rank: 7, username: 'Mas*****r', avatar: 'MR', wagered: '$1,950.90', prize: '$150' },
    { rank: 8, username: 'Top*****r', avatar: 'TR', wagered: '$1,800.75', prize: '$125' },
    { rank: 9, username: 'Jam*****s', avatar: 'JS', wagered: '$1,700.50', prize: '$100' },
    { rank: 10, username: 'Big*****r', avatar: 'BR', wagered: '$1,600.25', prize: '$75' },
    { rank: 11, username: 'Cas*****o', avatar: 'CO', wagered: '$1,500.40', prize: null },
    { rank: 12, username: 'Win*****t', avatar: 'WT', wagered: '$1,400.15', prize: null },
    { rank: 13, username: 'Luc*****y', avatar: 'LY', wagered: '$1,300.50', prize: null },
    { rank: 14, username: 'Yon*****d', avatar: 'YD', wagered: '$1,200.25', prize: null },
    { rank: 15, username: 'KOS****S', avatar: 'KS', wagered: '$1,100.10', prize: null }
  ];

  const currentTop3 = activeTab === 'active' ? top3Players : previousTop3;
  const currentRankings = activeTab === 'active' ? activeRankings : previousRankings;

  return (
    <section className="leaderboard-page">
      <div className="section-container">
        {/* Rainbet Logo Section */}
        <div className="leaderboard-logo-section">
          <div className="rainbet-logo-large">
            <img src="/rainbet.png" alt="Rainbet" className="rainbet-logo-image" />
          </div>
          <div className="leaderboard-title-main">Monthly Wagered Leaderboard</div>
          <div className="prize-pool-display">
            <span className="prize-pool-amount">$3,000</span>
            <span className="prize-pool-label">Monthly Prize Pool</span>
          </div>
        </div>

        {/* Countdown Timer - New Design */}
        <div className="countdown-section">
          <div className="countdown-card">
            <div className="countdown-header">
              <span className="countdown-title">Time Remaining</span>
            </div>
            <div className="countdown-grid">
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="countdown-unit">Days</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="countdown-unit">Hours</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="countdown-unit">Minutes</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="countdown-unit">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active/Previous Toggle */}
        <div className="leaderboard-tabs">
          <div className="leaderboard-tabs-container">
            <button 
              className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
              onClick={() => setActiveTab('active')}
            >
              Active
            </button>
            <button 
              className={`tab-button ${activeTab === 'previous' ? 'active' : ''}`}
              onClick={() => setActiveTab('previous')}
            >
              Previous
            </button>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="top-3-podium">
          {currentTop3.map(player => (
            <div key={player.rank} className={`podium-card rank-${player.rank}`}>
              <div className="podium-rank-badge">#{player.rank}</div>
              <div className="podium-avatar">{player.avatar}</div>
              <div className="podium-username">{player.username}</div>
              <div className="podium-wagered">
                <div className="podium-wagered-amount">{player.wagered}</div>
                <div className="podium-wagered-label">Total Wagered</div>
              </div>
              <div className="podium-prize">
                <span className="podium-prize-label">Prize</span>
                <span className="podium-prize-amount">{player.prize}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard Rankings */}
        <div className="leaderboard-rankings">
          <div className="rankings-header">
            <h2 className="rankings-title">
              {activeTab === 'active' ? 'Current Rankings' : 'Previous Month Results'}
            </h2>
          </div>
          <div className="rankings-table">
            {currentRankings.map(player => (
              <div key={player.rank} className="ranking-row">
                <div className="row-rank">#{player.rank}</div>
                <div className="row-avatar">{player.avatar}</div>
                <div className="row-username">{player.username}</div>
                <div className="row-wagered">
                  <span className="row-wagered-label">Wagered</span>
                  <span className="row-wagered-amount">{player.wagered}</span>
                </div>
                {player.prize ? (
                  <div className="row-prize">
                    <span className="row-prize-amount">{player.prize}</span>
                  </div>
                ) : (
                  <div className="row-prize-empty">—</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPage;
