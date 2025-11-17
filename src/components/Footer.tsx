import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About ShopHub</h4>
            <p>Your one-stop destination for premium products and exclusive deals.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#facebook" className="social-link" title="Facebook">
                <FiFacebook />
              </a>
              <a href="#twitter" className="social-link" title="Twitter">
                <FiTwitter />
              </a>
              <a href="#instagram" className="social-link" title="Instagram">
                <FiInstagram />
              </a>
              <a href="#linkedin" className="social-link" title="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
