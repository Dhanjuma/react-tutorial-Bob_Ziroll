import React from "react";
import logo from "../logo.svg";
import "../App.css";

export const Logo = () => {
  return (
    <header>
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
    </header>
  );
};
