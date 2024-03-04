import { useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const add = () => {
    setNumberOfItems(numberOfItems + 1);
  };
  const sub = () => {
    if (numberOfItems > 0) setNumberOfItems(numberOfItems - 1);
  };
  return (
    <div>
      <Navbar />
      <p>Total Items in cart - {numberOfItems} </p>
      <Cards
        numberOfItems={numberOfItems}
        setNumberOfItems={setNumberOfItems}
        add={add}
        sub={sub}
      />
    </div>
  );
}

export default App;
