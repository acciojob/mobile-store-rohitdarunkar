import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './../styles/App.css';

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

const initialProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S8",
    price: 16303,
    description: "Good phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 2,
    name: "iPhone 13",
    price: 70000,
    description: "Apple phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 3,
    name: "OnePlus 9",
    price: 40000,
    description: "Fast phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 4,
    name: "Pixel 6",
    price: 50000,
    description: "Google phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 5,
    name: "Moto G",
    price: 15000,
    description: "Budget phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 6,
    name: "Nokia",
    price: 12000,
    description: "Strong phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 7,
    name: "Realme",
    price: 18000,
    description: "Value phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 8,
    name: "Redmi",
    price: 16000,
    description: "Popular phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
     

      <Switch>
        <Route exact path="/">
          <ProductList products={products} />
        </Route>

        <Route path="/products/:id">
          <ProductDetails products={products} />
        </Route>

        <Route path="/admin">
          <AdminPanel products={products} setProducts={setProducts} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;