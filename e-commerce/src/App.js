import { useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const add = () => {
    setCartTotal(cartTotal + 1);
  };
  const sub = () => {
    if (cartTotal > 0) setCartTotal(cartTotal - 1);
  };
  return (
    <div>
      <Cards
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        setCartTotal={setCartTotal}
        add={add}
        sub={sub}
      />
    </div>
  );
}

export default App;
