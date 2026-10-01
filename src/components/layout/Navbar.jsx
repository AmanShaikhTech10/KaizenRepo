import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './Navbar.css'; 

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  // 1. Destructure the language variables and translation function t()
  const { language, toggleLanguage, t } = useLanguage(); 
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img 
            src="https://www.kaizensoftservices.com/assets/corporate/img/logos/logo-corp-red.png" 
            alt="Kaizen Softservices Logo" 
          />
        </Link>

        {/* Desktop Navigation Links - 2. Wrapped text in the t() function */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMobileMenu}>{t('nav.home')}</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}>{t('nav.about')}</NavLink>
          <NavLink to="/services" onClick={closeMobileMenu}>{t('nav.services')}</NavLink>
          <NavLink to="/portfolio" onClick={closeMobileMenu}>{t('nav.portfolio')}</NavLink>
          <NavLink to="/pricing" onClick={closeMobileMenu}>{t('nav.pricing')}</NavLink>
          <NavLink to="/career" onClick={closeMobileMenu}>{t('nav.career')}</NavLink>
          <NavLink to="/contact" className="contact-btn" onClick={closeMobileMenu}>{t('nav.contact')}</NavLink>
        </div>

        {/* Action Center: Theme Toggle & Mobile Menu Icon */}
        <div className="navbar-actions">
          
          {/* 3. Added the Language Toggle Button */}
          <button className="theme-toggle" onClick={toggleLanguage} style={{ fontWeight: 'bold', fontSize: '1rem' }} aria-label="Toggle Language">
            {language === 'en' ? 'EN' : 'मराठी'}
          </button>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? (
              // Moon Icon for Light Mode (Click to go Dark)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            ) : (
              // Sun Icon for Dark Mode (Click to go Light)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line></svg>
            )}
          </button>

          <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
               // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
               // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;