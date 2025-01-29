
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.citypng.com/public/uploads/preview/fast-food-delivery-cartoon-character-logo-hd-transparent-png-735811696674987bnjkeubewg.png"
          alt="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;