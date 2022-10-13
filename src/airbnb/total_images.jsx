import React from "react";
import star from ".//images/Star 1.png";
import ".//airbnb.css";

export const TotalImages = (prop) => {
  let badgeText;
  if (prop.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (prop.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {prop.openSpots === 0 || prop.location === "Online" ? (
        <div className="card--badge">{badgeText}</div>
      ) : null}
      <img src={prop.coverImg} alt="" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{prop.stats.rating}</span>
        <span className="light">({prop.stats.reviewCount}) • </span>
        <span className="light">{prop.location}</span>
      </div>
      <p className="card--title">{prop.title}</p>
      <p className="card--price">
        <span className="bold">From ${prop.price}</span> / person
      </p>
    </div>
  );
};
