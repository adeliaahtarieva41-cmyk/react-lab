import React from 'react';
import './Header.css';

const Header = ({ currentPage, onPageChange }) => {
  const navLinks = [
    { label: 'Главная', target: 'home' },
    { label: 'О нас', target: 'reviews' },
    { label: 'Партнеры', target: 'partners' },
    { label: 'Лекторы', target: 'lectors' },
    
  ];

  const handleNavClick = (target) => {
    if (currentPage !== 'Главная') {
      onPageChange('Главная');
      setTimeout(() => scrollToSection(target), 100);
    } else {
      scrollToSection(target);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo" onClick={() => onPageChange('Главная')}>
          LectorPro
        </div>

        <nav className="nav-container">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                if (link.target === 'partners' || link.target === 'lectors') {
                   onPageChange(link.label);
                } else {
                   handleNavClick(link.target);
                }
              }}
              className={`nav-btn ${currentPage === link.label ? 'active' : ''}`}
              type="button"
            >
              {link.label}
            </button>
          ))}
        </nav>
        
        <a href="tel:+79277777777" className="phone">
          <img src="/phone.png" className="phone-img" alt="Телефон" />
          <span>+7 927 777 77 77</span>
        </a>
      </div>
    </header>
  );
};

export default Header;