import React from 'react';
import './RulesSection.css';

const RulesSection = () => {
  const rules = [
    {
      title: 'Eligibility',
      items: [
        '18+ only. KYC may be required for prizes.',
        'Must wager through official Rainbet partner link.',
        'Accounts must be in good standing with no violations.',
      ]
    },
    {
      title: 'Scoring',
      items: [
        'Every $1 wagered = 1 leaderboard point.',
        'Points accumulate throughout the month.',
        'Leaderboard resets at the start of each month.',
      ]
    },
    {
      title: 'Prizes',
      items: [
        'Top 100 players receive prize pool shares.',
        'Prizes distributed within 7 days of month end.',
        'Additional perks for top 10 players.',
      ]
    },
  ];

  return (
    <section className="rules-section">
      <div className="section-container">
        <h2 className="section-title-center">Leaderboard Rules</h2>
        <div className="rules-grid">
          {rules.map((rule, index) => (
            <div key={index} className="rule-card card">
              <div className="rule-header">
                <img src="http://localhost:3845/assets/d662fee930b6e77f43f75020c95ca038184b4fe2.svg" alt="icon" className="rule-icon" />
                <h3 className="rule-title">{rule.title}</h3>
              </div>
              <ul className="rule-list">
                {rule.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="bullet">•</span>
                    <span className="rule-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
