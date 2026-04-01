import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({ products, setProducts }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  // ADD PRODUCT
  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      ...form
    };
    setProducts([...products, newProduct]);
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1 className="title">Admin</h1>

<div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/admin">Admin</Link>
</div>

      <div>
        <input
          className="form-control"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Description"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />
        <input
          className="form-control"
          placeholder="Image URL"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <button onClick={addProduct}>Add</button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>

            <button
              className="float-right"
              onClick={() => deleteProduct(p.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;