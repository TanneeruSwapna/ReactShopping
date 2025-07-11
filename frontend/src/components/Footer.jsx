import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content text-center">
        <h4>TrendCart © {new Date().getFullYear()}</h4>
        <p>Your go-to store for fashion, electronics, and more.</p>
        <p className="text-muted small">Built using React + FakeStoreAPI</p>
      </div>
    </footer>
  );
};

export default Footer;
