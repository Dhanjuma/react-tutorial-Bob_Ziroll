import React from "react";
import { Footer } from "./footer";
import { MainContent } from "./mainContent";
import { Nav } from "./nav";
import "../App.css";

export const Page = () => {
  return (
    <div>
      <Nav />
      <div className="App-header">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};
