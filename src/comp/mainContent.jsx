import React from "react";
import logo from "../logo.svg";
import "../App.css";

export const MainContent = () => {
  return (
    <>
      <h1>
        <img src={logo} alt="logo" style={{ width: "50px" }} />
        Fun facts about React
      </h1>
      <ul className="deets">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  );
};
