import React from "react";
import "./tenzies.css";

export const Tenzies = () => {
  return (
    <div className="body">
      <main className="border">
        <div className="tenzies-container">
          <h2>Tenzies</h2>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="numbers">
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
            <p>0</p>
          </div>
          <button>Roll</button>
        </div>
      </main>
    </div>
  );
};
