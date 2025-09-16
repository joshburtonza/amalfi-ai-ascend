
import React from 'react';
import logoImage from '@/assets/amalfi-logo.png';

const Logo = () => {
  return (
    <div className="flex items-center">
      <a href="#" className="flex items-center">
        <img 
          src={logoImage} 
          alt="Amalfi AI" 
          className="h-16 w-auto chrome-glow hover:chrome-glow-intense transition-all duration-300"
        />
      </a>
    </div>
  );
};

export default Logo;
