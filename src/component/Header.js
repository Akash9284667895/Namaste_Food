import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  const [name, setName] = useState("Login");
  const linkStyle = {
    color: "rgb(186 171 171)",
    textDecoration: "none",
  };
  return (
    <div className="header">
      <div className="img">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" style={linkStyle}>
              Cart
            </Link>
          </li>
          <button
            className="btn-login"
            onClick={() => {
              name === "Login" ? setName("Logout") : setName("Login");
            }}
          >
            {name}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
