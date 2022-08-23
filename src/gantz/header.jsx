import React from "react";
import "./gantz.css";
// import img from "./images/gantz (1).jpg";

export const Header = () => {
  return (
    <header className="content">
      {/* <div className="image">
        <img src={img} alt="img" />
      </div> */}
      <h1 className="title">GANTZ</h1>
      <div className="btns">
        <div>
          <a href="https://ww3.gogoanime2.org/search/gantz">
            {" "}
            <button className="btn--anime">ANIME</button>
          </a>
        </div>
        <div>
          <a href="https://read-gantz.com/">
            {" "}
            <button className="btn--manga">MANGA</button>
          </a>
        </div>
      </div>
    </header>
  );
};
