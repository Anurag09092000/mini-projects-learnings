import React from "react";
import { getProducts } from "../utils/getProduct";

const MenPage = () => {
  const products = getProducts();

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Men's Products
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <h3 style={{ marginTop: "10px", fontSize: "1.2rem" }}>
              {product.name}
            </h3>
            <p style={{ margin: "5px 0" }}>{product.description}</p>
            <p style={{ margin: "5px 0" }}>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenPage;
