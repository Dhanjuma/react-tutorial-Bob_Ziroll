import React from "react";
import "./state.css";

export function List() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    setThings((prevState) => [...prevState, `Thing ${prevState.length + 1}`]);
  }

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}
