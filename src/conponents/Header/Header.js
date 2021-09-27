import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="head">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <a href="./shop">Shop</a>
        <a href="./order">Order</a>
        <a href="./manage">Manage</a>
      </nav>
    </div>
  );
};

export default Header;
