import { useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <p>Total Items in cart - 0 </p>
      <Cards />
    </div>
  );
}

export default App;
