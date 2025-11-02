import React, { useState, useRef, useEffect } from 'react';
import './FloatingIcons.css';

const FloatingIcons = () => {
  const [positions, setPositions] = useState({});
  const [dragging, setDragging] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseDown = (e, iconId) => {
    e.preventDefault();
    e.stopPropagation();
    
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    if (!containerRect) return;
    
    setDragOffset({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
    
    setDragging(iconId);
    setPositions(prev => ({
      ...prev,
      [iconId]: {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      }
    }));
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const iconSize = 80; // Approximate icon size
      const newX = e.clientX - containerRect.left - dragOffset.x;
      const newY = e.clientY - containerRect.top - dragOffset.y;
      
      // Keep icons within container bounds
      const constrainedX = Math.max(iconSize / 2, Math.min(newX, containerRect.width - iconSize / 2));
      const constrainedY = Math.max(iconSize / 2, Math.min(newY, containerRect.height - iconSize / 2));
      
      setPositions(prev => ({
        ...prev,
        [dragging]: { x: constrainedX, y: constrainedY }
      }));
    };

    const handleMouseUp = () => {
      setDragging(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, dragOffset]);

  const getStyle = (iconId, defaultClass) => {
    const pos = positions[iconId];
    const style = {
      cursor: dragging === iconId ? 'grabbing' : 'grab',
      userSelect: 'none',
    };
    
    // Only apply inline positioning if icon has been moved
    if (pos && pos.x !== null && pos.y !== null) {
      style.left = `${pos.x}px`;
      style.top = `${pos.y}px`;
      style.transform = 'translate(-50%, -50%)';
      style.animation = 'none';
      style.right = 'auto';
    }
    
    return style;
  };

  // Casino-themed icons
  const icons = [
    {
      id: 'chip',
      name: 'Poker Chip',
      component: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="35" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2"/>
          <circle cx="40" cy="40" r="25" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="2 2"/>
          <text x="40" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="bold">$</text>
          <circle cx="40" cy="40" r="15" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
        </svg>
      )
    },
    {
      id: 'dice',
      name: 'Dice',
      component: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="60" height="60" rx="8" fill="#1F2937" stroke="#FFFFFF" strokeWidth="2"/>
          <circle cx="25" cy="25" r="4" fill="#FFFFFF"/>
          <circle cx="55" cy="25" r="4" fill="#FFFFFF"/>
          <circle cx="40" cy="40" r="4" fill="#FFFFFF"/>
          <circle cx="25" cy="55" r="4" fill="#FFFFFF"/>
          <circle cx="55" cy="55" r="4" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      id: 'card',
      name: 'Playing Card',
      component: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="60" height="50" rx="4" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2"/>
          <text x="20" y="35" fill="#DC2626" fontSize="24" fontWeight="bold">A</text>
          <path d="M20 40 L60 40 M20 50 L60 50" stroke="#DC2626" strokeWidth="1.5"/>
          <text x="60" y="60" fill="#DC2626" fontSize="18" fontWeight="bold" textAnchor="end">♠</text>
        </svg>
      )
    },
    {
      id: 'coin',
      name: 'Gold Coin',
      component: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#FCD34D", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#F59E0B", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#D97706", stopOpacity:1}} />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="32" fill="url(#goldGradient)" stroke="#FCD34D" strokeWidth="2"/>
          <circle cx="40" cy="40" r="22" fill="none" stroke="#D97706" strokeWidth="1.5" opacity="0.6"/>
          <text x="40" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="bold">$</text>
        </svg>
      )
    },
    {
      id: 'spade',
      name: 'Spade',
      component: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 10 C35 15, 20 25, 20 35 C20 45, 30 50, 40 45 C50 50, 60 45, 60 35 C60 25, 45 15, 40 10 Z" fill="#000000" stroke="#FFFFFF" strokeWidth="1"/>
          <path d="M40 45 L40 65 M30 55 L50 55" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'diamond',
      name: 'Diamond',
      component: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 15 L50 35 L40 55 L30 35 Z" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2"/>
          <path d="M40 15 L55 40 L40 65 L25 40 Z" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8"/>
        </svg>
      )
    },
    {
      id: 'seven',
      name: 'Lucky Seven',
      component: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="40" height="50" rx="8" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2"/>
          <text x="40" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="48" fontWeight="700">7</text>
        </svg>
      )
    }
  ];

  return (
    <div 
      className="floating-icons-container" 
      ref={containerRef}
    >
      {icons.map((icon, index) => {
        const iconId = icon.id;
        const defaultClass = `icon-${iconId}`;
        const defaultPosition = {
          chip: { x: '15%', y: '20%' },
          dice: { x: '85%', y: '25%' },
          card: { x: '20%', y: '70%' },
          coin: { x: '75%', y: '65%' },
          spade: { x: '80%', y: '75%' },
          diamond: { x: '10%', y: '40%' },
          seven: { x: '12%', y: '60%' },
        }[iconId] || { x: `${20 + index * 15}%`, y: `${30 + index * 20}%` };

        return (
          <div 
            key={iconId}
            className={`floating-icon ${defaultClass} ${dragging === iconId ? 'dragging' : ''}`}
            style={getStyle(iconId, defaultClass)}
            onMouseDown={(e) => handleMouseDown(e, iconId)}
            onTouchStart={(e) => {
              e.preventDefault();
              const touch = e.touches[0];
              const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY,
                bubbles: true,
                cancelable: true
              });
              handleMouseDown(mouseEvent, iconId);
            }}
          >
            {icon.component}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
