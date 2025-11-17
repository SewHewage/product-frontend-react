import React from 'react';
import './Banner.css';

interface BannerProps {
  onShopNow: () => void;
}

const Banner: React.FC<BannerProps> = ({ onShopNow }) => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2 className="banner-tagline">Welcome to ShopHub</h2>
        <p className="banner-text">
          Discover amazing products at unbeatable prices. Shop the latest trends and exclusive deals!
        </p>
        <button className="shop-now-btn" onClick={onShopNow}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
