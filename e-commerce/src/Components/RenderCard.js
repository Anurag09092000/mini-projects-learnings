import { useState } from "react";

const RenderCard = ({ data, add, sub, numberOfItems }) => {
  //const [numberOfItems, setNumberOfItems] = useState(0);
  //   const add = () => {
  //     setNumberOfItems(numberOfItems + 1);
  //   };
  //   const sub = () => {
  //     setNumberOfItems(numberOfItems - 1);
  //   };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
        width: "250px",
        marginRight: "10px",
        marginTop: "10px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
        }}
      >
        {" "}
        {data?.name}
      </h3>
      <img
        style={{
          textAlign: "center",
        }}
        src={data?.image}
        alt=" Image"
        width={200}
        height={200}
      />
      <button className="btn btn-danger" onClick={sub}>
        -
      </button>
      {numberOfItems}
      <button className="btn btn-primary" onClick={add}>
        +
      </button>
    </div>
  );
};

export default RenderCard;
