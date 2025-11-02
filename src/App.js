import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import RainbetSection from './components/RainbetSection';
import RulesSection from './components/RulesSection';
import RogueJackSection from './components/RogueJackSection';
import ViewLeaderboardSection from './components/ViewLeaderboardSection';
import Footer from './components/Footer';
import PageBackground from './components/PageBackground';
import FloatingIcons from './components/FloatingIcons';
import LeaderboardPage from './components/LeaderboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="App">
      <PageBackground />
      <FloatingIcons />
      <Header />
      {currentPage === 'leaderboard' ? (
        <LeaderboardPage />
      ) : (
        <>
          <Hero />
          <RainbetSection />
          <RulesSection />
          <RogueJackSection />
          <ViewLeaderboardSection />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
