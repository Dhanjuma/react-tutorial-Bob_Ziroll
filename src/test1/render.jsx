import React from "react";
import { Main } from "./main";
import { Nav } from "./navbar";

export const Render = () => {
  return (
    <div>
      <div>
        <Nav />
        <Main />
      </div>
    </div>
  );
};
