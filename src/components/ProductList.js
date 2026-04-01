import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Home</h1>
      <div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/admin">Admin</Link>
</div>

      <div className="products-grid">
  {products.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.image} alt={item.name} />

      <div>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>

        <button className="btn">Buy</button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default ProductList;