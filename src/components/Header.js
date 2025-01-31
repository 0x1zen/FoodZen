import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
