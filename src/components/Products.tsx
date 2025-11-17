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
