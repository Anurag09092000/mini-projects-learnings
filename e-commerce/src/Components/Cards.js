import { getProducts } from "./utils/getProduct";
import RenderCard from "./RenderCard";
import { useState, useEffect } from "react";

function filterData(searchText, products) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Cards = ({ add, sub, searchItem }) => {
  const products = getProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filteredData = filterData(searchItem, products);
    setFilteredProducts(filteredData);
  }, [searchItem]);

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
        {filteredProducts.map((title, index) => (
          <RenderCard data={title} key={index} add={add} sub={sub} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
