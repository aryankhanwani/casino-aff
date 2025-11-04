import React from 'react';
import './FloatingIcons.css';

const FloatingIcons = () => {

  // Crystal icons
  const icons = [
    {
      id: 'crystal1',
      name: 'Crystal 1',
      component: <img src="/icon crystal.png" alt="Crystal" />
    },
    {
      id: 'crystal2',
      name: 'Crystal 2',
      component: <img src="/icon crystal.png" alt="Crystal" />
    },
    {
      id: 'crystal3',
      name: 'Crystal 3',
      component: <img src="/icon crystal.png" alt="Crystal" />
    },
    {
      id: 'crystal4',
      name: 'Crystal 4',
      component: <img src="/icon crystal.png" alt="Crystal" />
    },
    {
      id: 'crystal5',
      name: 'Crystal 5',
      component: <img src="/icon crystal.png" alt="Crystal" />
    },
    {
      id: 'crystal6',
      name: 'Crystal 6',
      component: <img src="/icon crystal.png" alt="Crystal" />
    },
    {
      id: 'crystal7',
      name: 'Crystal 7',
      component: <img src="/icon crystal.png" alt="Crystal" />
    }
  ];

  return (
    <div className="floating-icons-container">
      {icons.map((icon) => {
        const iconId = icon.id;
        const defaultClass = `icon-${iconId}`;

        return (
          <div 
            key={iconId}
            className={`floating-icon ${defaultClass}`}
          >
            {icon.component}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
