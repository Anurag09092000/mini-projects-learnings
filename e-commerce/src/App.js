import { useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Navbar
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        cartTotal={cartTotal}
      />
      <Cards
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        add={add}
        sub={sub}
      />
    </div>
  );
}

export default App;
