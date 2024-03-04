import { useState } from "react";

const RenderCard = ({ data, add, sub }) => {
  const [items, setItems] = useState(0);
  const addItems = () => {
    setItems(items + 1);
    add();
  };
  const subItems = () => {
    if (items > 0) {
      setItems(items - 1);
      sub();
    }
  };
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
      <button className="btn btn-danger" onClick={subItems}>
        -
      </button>
      {items}
      <button className="btn btn-primary" onClick={addItems}>
        +
      </button>
    </div>
  );
};

export default RenderCard;
