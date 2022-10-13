import React from "react";
import logo from ".//airbnb 1.png";
import ".//airbnb.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <img className="nav-img" src={logo} alt="logo"></img>
    </nav>
  );
};
