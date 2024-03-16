import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux/store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <>
      <div>Cart</div>
      <div>
        {items.map((product) => (
          <div>
            <img
              style={{
                height: 250,
                width: 250,
              }}
              src={product.image}
            />
            <h5>{product.name}</h5>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
