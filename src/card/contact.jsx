import React from "react";
import { Card } from "./card";
import cat1 from "./images/mr-whiskerson.png";
import cat2 from "./images/fluffykins.png";
import cat3 from "./images/felix.png";
import cat4 from "./images/pumpkin.png";

export const Contact = () => {
  return (
    <div className="contacts">
      <Card
        img={cat1}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Card
        img={cat2}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Card
        img={cat3}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Card
        img={cat4}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
};
