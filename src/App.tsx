import { useState, useRef } from 'react';
import type { Product } from './services/api';
import Header from './components/Header';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const productsRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (product: Product) => {
    setCartCount((prev) => prev + 1);
    // You can add a toast notification here later
    console.log(`Added ${product.name} to cart`);
  };

  const handleShopNow = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <Header cartCount={cartCount} onSearch={handleSearch} />
      <Banner onShopNow={handleShopNow} />
      <div ref={productsRef}>
        <Products searchQuery={searchQuery} onAddToCart={handleAddToCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
