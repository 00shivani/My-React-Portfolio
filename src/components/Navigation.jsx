// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/about" className="menu-link">
              About Me
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/contact" className="menu-link">
              Contact
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/portfolio" className="menu-link">
              Portfolio
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/resume" className="menu-link">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
