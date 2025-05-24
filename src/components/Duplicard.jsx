import React, { useState } from "react";

const Duplicard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const menWear = [
    {
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/l/g/y/40-asaeosh1087-arrow-sport-original-imah3yeyyzezzdgu.jpeg?q=70&crop=false",
      name: "Men's Shirt",
      brand: "Arrow",
      price: "$45",
    },
    {
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/e/c/j/xl-new-grand-collection-bca-fitoda-fashion-original-imagqhujpkmtryah.jpeg?q=70&amp;crop=false",
      name: "Men's Jacket",
      brand: "Levi's",
      price: "$70",
    },
  ];

  const womenWear = [
    {
      image:"https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/k/u/2/xxl-tie-dye-001-fabunna-cotton-original-imagzwfb5v6mjupy.jpeg?q=70&amp;crop=false",
      name: "Women's Dress",
      brand: "Zara",
      price: "$55",
    },
    {
      image:"https://rukminim2.flixcart.com/image/832/832/xif0q/hand-messenger-bag/o/c/n/-original-imagv2u8v7j93nwr.jpeg?q=70&amp;crop=false",
      name: "Women's Handbag",
      brand: "Michael Kors",
      price: "$120",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Clothing Categories</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Men Card */}
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
          <h2>Men Wear</h2>
          <button onClick={() => setSelectedCategory("men")}>Show Men Wear</button>
        </div>

        {/* Women Card */}
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
          <h2>Women Wear</h2>
          <button onClick={() => setSelectedCategory("women")}>Show Women Wear</button>
        </div>
      </div>

      {/* Display Section */}
      <div style={{ marginTop: "30px" }}>
        {selectedCategory === "men" && (
          <>
            <h3>Men Wear Details</h3>
            <div style={{ display: "flex", gap: "20px" }}>
              {menWear.map((item, index) => (
                <div key={index} style={{ border: "1px solid #ddd", padding: "10px" }}>
                  <img src={item.image} alt={item.name} width="150" />
                  <h4>{item.name}</h4>
                  <p>Brand: {item.brand}</p>
                  <p>Price: {item.price}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {selectedCategory === "women" && (
          <>
            <h3>Women Wear Details</h3>
            <div style={{ display: "flex", gap: "20px" }}>
              {womenWear.map((item, index) => (
                <div key={index} style={{ border: "1px solid #ddd", padding: "10px" }}>
                  <img src={item.image} alt={item.name} width="150" />
                  <h4>{item.name}</h4>
                  <p>Brand: {item.brand}</p>
                  <p>Price: {item.price}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Duplicard;