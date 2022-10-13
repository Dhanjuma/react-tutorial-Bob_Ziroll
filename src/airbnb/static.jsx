import React from "react";
import img from ".//Group 77.png";
import ".//airbnb.css";

export const Static = () => {
  return (
    <section className="static">
      <div className="img--container">
        {" "}
        <img className="static--img" src={img} alt="logo"></img>
      </div>
      <div className="txt--container">
        {" "}
        <h1 className="static--header">Online Experiences</h1>
        <p className="static--body">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
    // <section className="Static">
    //   {/* // <section className="hero"> */} {/* <div className="static"> */}
    //   <img className="static-img" src={img} alt="logo"></img>
    //   {/* <img className="hero-img" src={img} alt="logo"></img> */}
    //   {/* </div> */}
    //   <div className="static-txt">
    //     {" "}
    //     <h1 className="static-header">Online Experiences</h1>
    //     {/* <h1 className="hero-header">Online Experiences</h1> */}
    //     <p className="static-body">
    //       {/* <p className="hero-body"> */}
    //       Join unique interactive activities led by one-of-a-kind hosts—all
    //       without leaving home.
    //     </p>
    //   </div>
    // </section>
  );
};
