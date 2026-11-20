import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, addToCart }) {
  return (
    <section className="product-list">
      <h2>Available Products</h2>

      {products.length === 0 ? (
        <p> No products found.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </section>
  );
}

export default ProductList;