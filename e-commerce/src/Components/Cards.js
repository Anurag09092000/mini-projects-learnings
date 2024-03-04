import { getProducts } from "./utils/getProduct";
import RenderCard from "./RenderCard";
import { useState, useEffect } from "react";

function filterData(searchText, products) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Cards = ({ add, sub }) => {
  const [searchText, setSearchText] = useState("");
  const products = getProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filteredData = filterData(searchText, products);
    setFilteredProducts(filteredData);
  }, [searchText]);

  return (
    <div>
      <div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onBlur={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
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
