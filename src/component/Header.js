import { LOGO_URL } from "../utils/constants";


const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;