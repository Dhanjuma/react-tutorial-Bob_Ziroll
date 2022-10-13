import React from "react";
import "./image.css";

export default function EventListeners() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function handleHover() {
    console.log("I was hovered!");
  }

  /**
   * Challenge:
   * Log something to the console when the mouse hovers over the image
   */

  return (
    <div className="event-container">
      <img
        onMouseEnter={handleHover}
        alt=""
        src="https://picsum.photos/640/360"
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
