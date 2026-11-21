import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';
import { sampleProducts } from './data/products';
import './App.css';

function App() {
  const [darkMode, setDarkmode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState('All');

  const toggleDarkMode = () => {
    setDarkmode((previousMode) => !previousMode);
  };

  const addToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product]);
  };

  const filteredProducts =
    category === 'All'
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === category
      );

      return (
        <div className={`app ${darkMode ? 'dark' : 'light'}`}>
          <header>
            <h1>My online Store</h1>

            <DarkModeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </header>

          <main>
            <div className="filter">
              <label htmlFor="category">Filter by category:</label>

              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="All"> All Categories</option>
                <option value="Fruits">Fruits</option>
                <option value="Dairy">Dairy</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home">Home</option>
                <option value="NonExistent">NonExistent</option>
              </select>
            </div>

            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
            />

            <Cart cartItems={cartItems} />
          </main>
        </div>
      );
}

export default App;
