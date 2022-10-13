import React from "react";
import img1 from ".//images/image 12.png";
import img2 from ".//images/wedding-photography 1.png";
import img3 from ".//images/mountain-bike 1.png";
import star from ".//images/Star 1.png";
import ".//airbnb.css";

export const Images = () => {
  return (
    <div className="imgs--container">
      {" "}
      <div className="container">
        <div className="imgs">
          {" "}
          <img style={{ width: "100%" }} src={img1} alt="img" />
        </div>
        <div className="imgs--text">
          <img
            style={{ width: "18px", objectFit: "contain" }}
            src={star}
            alt="img"
          />
          <p>
            5.0 <span className="light"> (6) • USA</span>
          </p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
      <div className="container">
        <div className="imgs">
          <img style={{ width: "100%" }} src={img2} alt="img" />
        </div>
        <div className="imgs--text">
          <img
            style={{ width: "18px", objectFit: "contain" }}
            src={star}
            alt="img"
          />
          <p>
            5.0 <span className="light"> (30) • USA</span>
          </p>
        </div>
        <p>Learn wedding photography</p>
        <p>
          <span className="bold">From $125</span> / person
        </p>
      </div>
      <div className="container">
        <div className="imgs">
          <img style={{ width: "71%" }} src={img3} alt="img" />
        </div>
        <div className="imgs--text">
          <img
            style={{ width: "18px", objectFit: "contain" }}
            src={star}
            alt="img"
          />
          <p>
            4.8 <span className="light"> (2) • USA</span>
          </p>
        </div>
        <p>Group Mountain Biking</p>
        <p>
          <span className="bold">From $50</span> / person
        </p>
      </div>
    </div>
  );
};
