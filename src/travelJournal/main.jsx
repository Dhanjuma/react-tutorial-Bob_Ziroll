import React from "react";
import { Content } from "./content";
import { data } from "./data";
import { Footer } from "./footer";
import { Nav } from "./nav";
import "./travel.css";

export const Main = () => {
  const details = data.map((info) => <Content key={info.id} {...info} />);
  return (
    <div className="wrapper">
      <Nav />
      <main>{details}</main>
      <Footer />
    </div>
  );
};
