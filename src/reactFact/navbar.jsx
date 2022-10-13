import React from "react";
import logo from "../logo.svg";
import "./test1.css";

export const Nav = (props) => {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className="nav--logo_text">
        {" "}
        <img src={logo} alt="logo" style={{ width: "50px" }} />
        <h3>ReactFacts</h3>
      </div>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
};
