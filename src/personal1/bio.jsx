import React from "react";
import { About } from "./about";
import { Footer } from "./footer";
import { Info } from "./info";
// import { Interest } from "./interests";

export const Bio = () => {
  return (
    <div>
      <Info />
      <About />
      {/* <Interest /> */}
      <Footer />
    </div>
  );
};
