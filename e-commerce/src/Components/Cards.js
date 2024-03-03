// import { useState } from "react";
import { getProducts } from "./utils/getProduct";
import RenderCard from "./RenderCard";

const Cards = () => {
  const products = getProducts();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "10px",
          marginLeft: "10px",
          marginInline: "10px",
        }}
      >
        {products.map(function (title, index) {
          return <RenderCard data={title} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
