import React from 'react';

function Cart({ cartItems}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <section className="cart">
      <h2>Shopping Cart ({cartItems.length})</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={`${item.id}- ${index}`}>
             <p>
              {item.name} - ${item.price}
             </p>
          </div>
      ))}

      <h3>Total: ${total}</h3>
    </>
     )}
    </section>
  );
}

export default Cart;
