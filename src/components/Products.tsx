import React, { useState, useEffect } from 'react';
import type { Product } from '../services/api';
import { productService } from '../services/api';
import ProductCard from './ProductCard';
import './Products.css';

interface ProductsProps {
  searchQuery: string;
  onAddToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ searchQuery, onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productService.getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError('Failed to load products. Please check your Laravel API connection.');
        console.error(err);
        // Fallback demo data for testing without API
        const demoProducts: Product[] = [
          {
            id: 1,
            name: 'Premium Wireless Headphones',
            description: 'High-quality sound with noise cancellation',
            price: 99.99,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
          },
          {
            id: 2,
            name: 'Smart Watch Pro',
            description: 'Track your fitness with advanced features',
            price: 299.99,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
          },
          {
            id: 3,
            name: 'Ultra HD Camera',
            description: 'Capture moments in stunning detail',
            price: 599.99,
            image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop',
          },
          {
            id: 4,
            name: 'Portable Power Bank',
            description: 'Fast charging for all your devices',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1609042231979-ab96f917b961?w=400&h=300&fit=crop',
          },
          {
            id: 5,
            name: 'Bluetooth Speaker',
            description: 'Crystal clear sound with 360° audio',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1589003077984-894e133dba90?w=400&h=300&fit=crop',
          },
          {
            id: 6,
            name: 'USB-C Hub',
            description: 'Connect all your peripherals easily',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop',
          },
        ];
        setProducts(demoProducts);
        setFilteredProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <h2 className="products-title">Featured Products</h2>
        <p className="products-subtitle">
          {searchQuery ? `Search results for "${searchQuery}"` : 'Browse our collection'}
        </p>

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-message">
            <p>{error}</p>
            <p className="error-note">Showing demo products instead</p>
          </div>
        )}

        {!loading && filteredProducts.length === 0 && !error && (
          <div className="no-results">
            <p>No products found matching "{searchQuery}"</p>
            <button
              className="reset-btn"
              onClick={() => {
                setFilteredProducts(products);
              }}
            >
              Show All Products
            </button>
          </div>
        )}

        {!loading && filteredProducts.length > 0 && (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
