import React from "react";
import "./App.css";

import { AirBnB } from "./airbnb/airbnbpage";
import { Contact } from "./card/contact";
import { Bio } from "./clever/bio";
import { Profile } from "./danjuma/profile";
import { Complete } from "./gantz/complete";
import { Display } from "./jokes/display";
import { MemePage } from "./memeGenerator/memePage";
import { Render } from "./reactFact/render";
import { Tenzies } from "./tenzies/tenzies";
import { Main } from "./travelJournal/main";

function App() {
  const [showOption] = React.useState(false);
  const [tempOption, setTempOption] = React.useState({ toRender: "" });
  const [option, setOption] = React.useState("reactFact");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempOption((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOption(tempOption.toRender);
  };
  console.log(option);
  return (
    <div>
      {!showOption && (
        <div className="all">
          <form className="form" onSubmit={handleSubmit}>
            <select onChange={handleChange} name="toRender">
              <option value="reactFact">ReactFact</option>
              <option value="airbnb">AirBnb</option>
              <option value="card">Card</option>
              <option value="clever">Clever</option>
              <option value="danjuma">Danjuma</option>
              <option value="gantz">Gantz</option>
              <option value="jokes">Jokes</option>
              <option value="memeGenerator">MemeGenerator</option>
              <option value="tenzies">Tenzies</option>
              <option value="travelJournal">TravelJournal</option>
            </select>
            <button type="submit">Set</button>
          </form>
        </div>
      )}

      {option === "airbnb" && <AirBnB />}
      {option === "card" && <Contact />}
      {option === "clever" && <Bio />}
      {option === "danjuma" && <Profile />}
      {option === "gantz" && <Complete />}
      {option === "jokes" && <Display />}
      {option === "memeGenerator" && <MemePage />}
      {option === "reactFact" && <Render />}
      {option === "tenzies" && <Tenzies />}
      {option === "travelJournal" && <Main />}
    </div>
  );
}

export default App;
