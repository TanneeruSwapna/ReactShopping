import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert("Item added to cart!");
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <section className="home-header">
        <div className="intro-text">
          <h1>Welcome to <span className="brand">TrendCart</span></h1>
          <p>
            We bring you a handpicked collection of trending fashion, lifestyle accessories, and tech gadgets.
            Our platform showcases products from the <strong>FakeStore API</strong> to help you build powerful eCommerce apps.
          </p>
        </div>
      </section>

      <section className="products-section">
        <h2 className="section-title">Explore Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card fade-in" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-img"
              />
              <div className="product-info">
                <h5 className="product-title">{product.title}</h5>
                <p className="product-desc">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="product-price">${product.price}</p>
                <button
                  className="buy-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

       
      </section>

      <Footer />
    </>
  );
};

export default Home;
