import React from "react";
import { Main } from "./main";
import { Nav } from "./navbar";
import "./test1.css";

export const Render = () => {
  const [mode, setMode] = React.useState(true);
  const toggleMode = () => {
    setMode((prevMode) => !prevMode);
  };
  return (
    <div className="fact-container">
      <Nav toggleDarkMode={toggleMode} darkMode={mode} />
      <Main darkMode={mode} />
    </div>
  );
};
