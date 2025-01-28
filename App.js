import React from "react";
import ReactDOM from "react-dom/client";

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

const Card = (props) => {
  const {restoName,cuisineName}=props;
  return (
    <div className="resto-card">
      <img
        className="resto-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
      ></img>
      <h3 className="resto-name">{restoName}</h3>
      <h4 className="cuisine-name">{cuisineName}</h4>
      <h4 className="star-rating">4.4 Stars</h4>
      <h4 className="delivery-time">38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="resto-container">
        <Card restoName="Meghana Foods" cuisineName="Biryani,North Indian,Asian"/>
        <Card restoName="KFC" cuisineName="Burger,Fried Chicken,Fast Food"/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
