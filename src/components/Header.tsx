import React, { useState } from 'react';
import { FiShoppingCart, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

interface HeaderProps {
  cartCount: number;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>🛍️ Aahaas Ecommerce</h1>
        </div>

        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="header-right">
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <FiSearch />
            </button>
          </form>

          <div className="cart-icon-container">
            <FiShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
