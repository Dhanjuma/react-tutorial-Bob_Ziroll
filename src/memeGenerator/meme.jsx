import React from "react";
import "./meme.css";
// import { all } from "./imagesData";

export const MemeField = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const all = await res.json();
      setAllMemes(all.data.memes);
    };
    getMemes();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const handleClick = () => {
    const randomLink = allMemes[Math.floor(Math.random() * allMemes.length)];
    const url = randomLink.url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  return (
    <main className="field-container">
      <div className="field">
        <input
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          type="text"
          className="field-txt"
        />
        <input
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          type="text"
          className="field-txt"
        />
      </div>
      <button className="field-btn" onClick={handleClick}>
        Get a new meme image 🖼
      </button>
      <div className="img-container">
        <img src={meme.randomImage} alt="" className="field-img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

//! STYLING WITH FLEXBOX
// <div className="field-container">
//   <form className="field">
//     <input className="field-txt" placeholder="Shut up" />
//     <input className="field-txt" placeholder=" and take my money" />
//   </form>
//   <button className="field-btn">Get a new meme image 🖼</button>
// </div>
