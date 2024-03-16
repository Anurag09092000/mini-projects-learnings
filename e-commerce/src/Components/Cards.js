import { getProducts } from "./utils/getProduct";
import RenderCard from "./RenderCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// function filterData(searchText, products) {
//   return products.filter((product) =>
//     product.name.toLowerCase().includes(searchText.toLowerCase())
//   );
// }

const Cards = ({ add, sub, searchItem }) => {
  // const products = getProducts();
  // const [filteredProducts, setFilteredProducts] = useState(products);

  // useEffect(() => {
  //   const filteredData = filterData(searchItem, products);
  //   setFilteredProducts(filteredData);
  // }, [searchItem]);
  const searchResults = useSelector((state) => state.search);
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
        {searchResults.data.map((title, index) => (
          <RenderCard data={title} key={index} add={add} sub={sub} />
        ))}
        {/* {filteredProducts.map((title, index) => (
          <RenderCard data={title} key={index} add={add} sub={sub} />
        ))} */}
      </div>
    </div>
  );
};

export default Cards;
