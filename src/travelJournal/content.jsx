import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Content = (prop) => {
  return (
    <main className="travel-container">
      <div>
        <img className="travel-container--img" src={prop.imageUrl} alt="" />
      </div>
      <div className="travel-container--text">
        <div className="travel-container--location">
          <p>
            <FontAwesomeIcon className="icon" icon={faLocationDot} />{" "}
            {prop.location}
          </p>
          <a href={prop.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{prop.title}</h1>
        <h4>
          {prop.startDate} - {prop.endDate}
        </h4>
        <p>{prop.description}</p>
      </div>
    </main>
  );
};
