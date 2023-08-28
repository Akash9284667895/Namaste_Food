import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


const Header = () => {

  const [name,setName]=useState("Login")

    return (
      <div className="header">
        <div className="img">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <button className="btn-login" onClick={()=>{
              name==="Login"
              ?setName("Logout")
              :setName("Login");
            }}>{name}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;