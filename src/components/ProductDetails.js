import React from "react";
import { useParams, useHistory } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const history = useHistory();

  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} width="150" />
      <p>Price: {product.price}</p>
      <p>{product.description}</p>

      <button className="btn" onClick={() => history.push("/")}>
        Back
      </button>
    </div>
  );
}

export default ProductDetails;