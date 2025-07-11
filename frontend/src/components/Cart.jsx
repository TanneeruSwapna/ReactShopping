import React, { useEffect, useState } from 'react';
import PaymentGateway from './paymentGateway';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Cart Page</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">No items in the cart.</p>
      ) : (
        cart.map((item, index) => (
          <div>
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
            <button className="remove-btn" onClick={() => handleRemove(index)}>X</button>
          </div>
          <PaymentGateway amount={item.price} />
          </div>))
      )}
    </div>
  );
};

export default Cart;
