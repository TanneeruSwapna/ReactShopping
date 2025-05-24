import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [aboutContent, setAboutContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data) => {
        setAboutContent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="trend-about-loading">Loading...</div>;
  }

  return (
    <div className="trend-about-page">
      <div className="trend-about-background" />
      <div className="trend-about-content">
        <h1 className="trend-about-title">About TrendCart</h1>
        <div className="trend-about-main">
          <div className="trend-about-left">

        <div className="about-page">
        <p><strong>Welcome to TrendCart — Your One-Stop Fashion & Lifestyle Destination!</strong></p>
      <p>At <strong>TrendCart</strong>, we believe shopping should be simple, stylish, and smart. Our mission is to provide customers with the latest trends in <em>fashion, electronics, and lifestyle products</em> — all in one place.</p>
    
      <ul>
        <li><strong>Trendy & Affordable:</strong> Curated collections with the latest styles.</li>
        <li><strong>Diverse Categories:</strong> From clothing to electronics, we’ve got you covered.</li>
        <li><strong>Secure Checkout:</strong> Safe and seamless online shopping experience.</li>
        <li><strong>Customer First:</strong> We value your satisfaction above everything.</li>
      </ul>
      <p>Join thousands of happy shoppers and make TrendCart your go-to shopping destination.</p>
    </div>


              </div>
          <div className="trend-about-right">
            <img
              src="https://img.freepik.com/premium-photo/pretty-young-woman-white-coat-hat-posing-brown-background_210435-3972.jpg?semt=ais_hybrid&w=740"
              alt="Clothing Store"
              className="trend-about-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
