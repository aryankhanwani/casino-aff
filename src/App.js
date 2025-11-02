import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function HomePage() {
  return (
    <>
      <Hero />
      <RainbetSection />
      <RulesSection />
      <RogueJackSection />
      <ViewLeaderboardSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageBackground />
        <FloatingIcons />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
