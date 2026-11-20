import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';
import './App.css';

const products = [
  { id: 1, name: 'Laptop', price: 800, category: 'Electronics'  },
  { id: 2, name: 'Headphones', price: 50, category: 'Electronics'
},
  { id: 3, name: 'T-shirt', price: 25, category: 'Clothing' },
  { id: 4, name: 'Jeans', price: 45, category: 'Clothing' },
  { id: 5, name: 'Coffee Maker', price: 70, category: 'Home' },
  { id: 6, name: 'Chair', price: 120, category: 'Home' },
];

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
      ? products
      : products.filter((product) => product.category === category);

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
            <div classmate="filter">
              <label htmlFor="category">Filter by category:</label>

              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.currentTarget.value)}
              >
                <option value="All"> All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home">Home</option>
              </select>
            </div>

            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
            />
          </main>
        </div>
      );
}

export default App;
