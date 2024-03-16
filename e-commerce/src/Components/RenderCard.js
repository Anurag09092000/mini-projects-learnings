import { useState } from "react";
import { add, remove } from "../redux/store/cartSlice";
import { useDispatch } from "react-redux";

const RenderCard = ({ data }) => {
  //const [items, setItems] = useState(0);
  // const addItems = () => {
  //   add();
  //   setItems(items + 1);
  // };
  const dispatch = useDispatch();
  const handleAdd = (data) => {
    dispatch(add(data));
  };

  // const handleRemove = (data) => {
  //   dispatch(remove(data));
  // };

  // const subItems = () => {
  //   if (items > 0) {
  //     setItems(items - 1);
  //     sub();
  //   }
  // };
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
      {/* <button
        className="btn btn-danger"
        //onClick={() => handleRemove(data)}
        style={{
          marginRight: "5px",
          padding: "5px 10px",
          fontSize: "1rem",
          backgroundColor: "red",
          color: "white",
        }}
      >
        -
      </button> */}
      {/* <span style={{ fontSize: "1rem", fontWeight: "bold" }}>{items}</span> */}
      <button
        className="btn btn-primary"
        onClick={() => handleAdd(data)}
        style={{
          marginLeft: "50px",
          marginTop: "10px",
          padding: "5px 10px",
          textAlign: "center",
          fontSize: "1rem",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        Add Item
      </button>
    </div>
  );
};

export default RenderCard;
