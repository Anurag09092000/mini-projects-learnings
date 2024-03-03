import { useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Cards />
    </div>
  );
}

export default App;
