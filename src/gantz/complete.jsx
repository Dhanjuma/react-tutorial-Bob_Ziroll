import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { ImageSlider } from "./imageSlider";
import { Materials } from "./materials";
import { Plot } from "./plot";

export const Complete = () => {
  return (
    <main className="complete">
      <ImageSlider />
      <Header />
      <Plot />
      <Materials />
      <Footer />
    </main>
  );
};
