import React from "react";
import logo from "../logo.svg";
import "./test1.css";

export const Nav = () => {
  return (
    <nav className="nav_bar">
      <div className="nav--logo_text">
        {" "}
        <img src={logo} alt="logo" style={{ width: "50px" }} />
        <h3>ReactFacts</h3>
      </div>
      <h4 className="nav--text">React Course - Project 1</h4>
    </nav>
  );
};
