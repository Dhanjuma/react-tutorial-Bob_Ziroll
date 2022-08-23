import React from "react";
import { Logo } from "./logo";

export const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        contentAlign: "center",
        alignItems: "center",
        backgroundColor: "#667083",
      }}
    >
      <Logo />
      <h1
        style={{
          fontFamily: "helvetica",
        }}
      >
        REACT PAGE
      </h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyleType: "none",
          alignItems: "center",
        }}
      >
        <li>View Code</li>
        <li>About</li>
        <li>Contact Me</li>
      </ul>
    </nav>
  );
};
