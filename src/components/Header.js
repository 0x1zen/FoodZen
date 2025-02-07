import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li className="online-status">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/" className="router-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="router-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="router-link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="router-link">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="router-link">
              Grocery
            </Link>
          </li>
          <button
            className="btn"
            onClick={() =>
              setLoginState((prevState) =>
                prevState === "login" ? "logout" : "login",
              )
            }
          >
            <span className="btn-name">{loginState}</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
