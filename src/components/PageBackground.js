import React from 'react';
import './PageBackground.css';

const PageBackground = () => {
  return (
    <div className="page-background">
      <div className="page-overlay-blur blur-1"></div>
      <div className="page-overlay-blur blur-2"></div>
      <div className="page-overlay-blur blur-3"></div>
      <div className="page-gradient"></div>
      <div className="page-overlay-dots"></div>
    </div>
  );
};

export default PageBackground;

