import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import type { Product } from '../services/api';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const imageUrl = product.image_url || product.image || 'https://via.placeholder.com/300x300?text=Product+Image';

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={product.name} className="product-image" />
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
          title="Add to cart"
        >
          <FiShoppingCart />
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">Rs.{product.price.toFixed(2)}</span>
          <button
            className="add-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
