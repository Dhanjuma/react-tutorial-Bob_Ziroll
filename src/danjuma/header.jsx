import React from "react";
import "./profile.css";
import { FaEnvelope } from "react-icons/fa";
import img from "./image.JPG";

export const Info = () => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   console.log("width", ref.current.offsetWidth);
  // }, []);
  // ref = { ref }
  // { useEffect, useRef }

  return (
    <div className="inn">
      <div className="fill">
        <img className="fill-img" src={img} alt=""></img>
      </div>
      <div className="inn-txt">
        <h1>Yahaya Abdullah Danjuma</h1>
        <h4>Fullstack Web Developer</h4>
        <p className="inn-txt-p">dhanjuma.website</p>
      </div>
      <div className="inn-btn-container">
        <button className="inn-btn">
          <FaEnvelope />
          &nbsp; Email
        </button>
      </div>
    </div>
  );
};
