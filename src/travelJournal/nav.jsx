import React from "react";
import "./travel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  return (
    <nav className="nav">
      <FontAwesomeIcon icon={faEarthAmericas} className="nav-icon" />
      <h2>my travel journal.</h2>
    </nav>
  );
};
