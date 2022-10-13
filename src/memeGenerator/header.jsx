import React from "react";
import troll from "./images/trollface_PNG14.png";
import "./meme.css";

export const Header = () => {
  return (
    <header className="header">
      <img className="icon--troll" src={troll} alt="" />
      <h2 className="icon--text">Meme Generator</h2>
      <h4>React Course - Project 3</h4>
    </header>
  );
};
