import React, { useState, useEffect } from "react";
import { getProducts } from "./utils/getProduct";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../redux/store/searchSlice";

const Navbar = ({ searchItem, setSearchItem }) => {
  const [searchText, setSearchText] = useState("");
  const item = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    //const search = searchText.trim();
    dispatch(setSearchResults({ searchText }));
  }, [searchText]);

  const handleSearch = (e) => {
    // e.preventDefault();
    if (searchText == "") {
      alert("Enter the item to be searched");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h3>COBB -INDIA</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-2">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/men" className="nav-link active" aria-current="page">
                Men
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/women" className="nav-link active" aria-current="page">
                Women
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/kids" className="nav-link active" aria-current="page">
                Kid
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link active" aria-current="page">
                Cart
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
          <p
            className="nav-item cart"
            style={{
              color: "white",
              textAlign: "center",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            Cart-Items :
            <span
              style={{
                margin: "4px",
              }}
            >
              {item.length}
            </span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
