import { useState } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import useOnlineStatus from "../utils/UseOnlineStatus";

const Header = () => {
  const [name, setName] = useState("Login");
  const online=useOnlineStatus();
const {loggedInUser} = useContext(UserContext);
  const linkStyle = {
    color: "rgb(186 171 171)",
    textDecoration: "none",
  };
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <div className="img">
        <img className="w-56" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex item-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">
            <Link to="/" >
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" >
              About
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" >
              Contact
            </Link>
          </li>
          <li className="px-4">
            <Link to="/cart" >
              Cart
            </Link>
          </li>
          <li className="px-4">
            Online Status:{online ?"✅":"🔴"}
          </li>
          <li className="px-4">
          <button
            onClick={() => {
              name === "Login" ? setName("Logout") : setName("Login");
            }}
          >
            {name}
          </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
