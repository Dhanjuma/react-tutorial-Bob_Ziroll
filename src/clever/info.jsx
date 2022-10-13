import React from "react";
import "./personal.css";
import img from "./041.JPG";

export const Info = () => {
  return (
    <main className="container">
      <div className="details">
        <div className="img">
          <img src={img} alt="logo" />
        </div>
        <h1>CLEVER</h1>
        <h2>Joshua Tyler Huie</h2>
        <br />
        <button className="btn1">Singles & EPs</button>
        <button className="btn2">Albums</button>
      </div>
    </main>
  );
};
