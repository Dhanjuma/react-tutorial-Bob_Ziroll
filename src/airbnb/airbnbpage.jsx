import React from "react";
import { data } from "./data";
// import { Images } from "./images";
import { Nav } from "./nav";
import { Static } from "./static";
import { TotalImages } from "./total_images";

export const AirBnB = () => {
  const Card = data.map((obj) => (
    <TotalImages
      key={obj.id}
      {...obj}

      // img={obj.coverImg}
      // rating={obj.stats.rating}
      // reviewCount={obj.stats.reviewCount}
      // location={obj.location}
      // txt={obj.title}
      // price={obj.price}
      // openSpots={obj.openSpots}
    />
  ));

  return (
    <div className="airbnb">
      <Nav />
      <Static />
      <section className="cards-list">{Card}</section>
      {/* <TotalImages
        img={img1}
        rating="5.0"
        reviewCount={6}
        location="USA"
        txt="Life Lessons with Katie Zaferes"
        price="136"
      /> */}
      {/* <Images /> */}
    </div>
  );
};
