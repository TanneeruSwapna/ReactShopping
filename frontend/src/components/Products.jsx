import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setAllProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.category.includes(category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="products-container fade-in">
      <h2 className="section-title">Our Products</h2>

      <div className="filter-buttons">
        {[
          { label: "All", value: "all" },
          { label: "Men", value: "men's clothing" },
          { label: "Women", value: "women's clothing" },
          { label: "Electronics", value: "electronics" },
        ].map(({ label, value }) => (
          <button
            key={value}
            className={`filter-btn ${activeCategory === value ? "active" : ""}`}
            onClick={() => handleFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h5 className="product-title">{product.title}</h5>
              <p className="product-desc">{product.description.slice(0, 100)}...</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
