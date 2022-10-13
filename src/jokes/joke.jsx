import React from "react";
import "./jokes.css";
export const Joke = (props) => {
  return (
    <div className="body">
      {props.setup && <h3>Setup : {props.setup}</h3>}
      <p>
        <strong>Punchline:</strong> {props.punchline}
      </p>
      <p> {/* <strong>Pun:</strong> {JSON.stringify(props.isPun)} */}</p>
    </div>
  );
};
