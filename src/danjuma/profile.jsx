import React from "react";
import { About } from "./about";
import { Footer } from "./footer";
import { Info } from "./header";
import { Interests } from "./interests";

export const Profile = () => {
  return (
    <div>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};
