import React, { useState } from 'react';
import './header.css';

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps {
  /** Logo text or image */
  logo?: React.ReactNode;
  /** Navigation items */
  navItems?: NavItem[];
  /** Right side actions */
  actions?: React.ReactNode;
  /** Sticky header */
  sticky?: boolean;
  /** Optional className for custom styling */
  className?: string;
}

/** Header component for navigation and branding */
export const Header = ({
  logo = 'HyUI',
  navItems = [],
  actions,
  sticky = false,
  className = '',
  ...props
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const stickyClass = sticky ? 'header--sticky' : '';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={['header', stickyClass, className].filter(Boolean).join(' ')}
        {...props}
      >
        <div className="header__container">
          <div className="header__logo">{logo}</div>

          {navItems.length > 0 && (
            <nav className="header__nav header__nav--desktop">
              <ul className="header__nav-list">
                {navItems.map((item, index) => (
                  <li key={index} className="header__nav-item">
                    <a
                      href={item.href}
                      className={[
                        'header__nav-link',
                        item.active ? 'header__nav-link--active' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {actions && <div className="header__actions header__actions--desktop">{actions}</div>}

          <button
            className="header__hamburger"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`header__hamburger-line ${mobileMenuOpen ? 'header__hamburger-line--open' : ''}`}></span>
            <span className={`header__hamburger-line ${mobileMenuOpen ? 'header__hamburger-line--open' : ''}`}></span>
            <span className={`header__hamburger-line ${mobileMenuOpen ? 'header__hamburger-line--open' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-menu ${mobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          <ul className="header__mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="header__mobile-nav-item">
                <a
                  href={item.href}
                  className={[
                    'header__mobile-nav-link',
                    item.active ? 'header__mobile-nav-link--active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="header__mobile-nav-arrow">▸</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {actions && (
            <div className="header__mobile-actions">
              {actions}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};
