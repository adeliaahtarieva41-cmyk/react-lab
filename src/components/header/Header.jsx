import React from 'react';
import './Header.css';

const Header = ({ currentPage, onPageChange }) => {
  const navLinks = ['Главная', 'Партнеры', 'Лекторы'];

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo" onClick={() => onPageChange('Главная')}>
          LectorPro
        </div>

        <nav className="nav-container">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => onPageChange(link)}
              className={`nav-btn ${currentPage === link ? 'active' : ''}`}
              type="button"
            >
              {link}
            </button>
          ))}
        </nav>

        <a href="" className="phone">
          +7 927 777 77 77
        </a>
      </div>
    </header>
  );
};

export default Header;