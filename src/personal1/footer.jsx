import React from "react";
import "./personal.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaSnapchat,
  FaFacebook,
} from "react-icons/fa";
// import ig from ".//logos/ig.png";
// import music from ".//logos/music.png";
// import twitter from ".//logos/twitter.png";
// import spotify from ".//logos/spotify.png";
// import youtube from ".//logos/youtube.png";

export const Footer = () => {
  return (
    // <footer className="container">
    <div className="footer">
      {/* <img className="logo--ig" src={ig} alt="logo" />
        <img className="logo--twitter" src={twitter} alt="logo" />
        <img className="logo--youtube" src={youtube} alt="logo" />
        <img className="logo--spotify" src={spotify} alt="logo" />
        <img className="logo--music" src={music} alt="logo" /> */}

      <small className="footer--text">
        All rights reserved. Yahaya Abdullah Danjuma 2022 ©.{" "}
      </small>
      <div className="social">
        {" "}
        <a href="https://www.instagram.com/dan_jhuma" className="social ig">
          {" "}
          <FaInstagram />
        </a>
        <a href="https://twitter.com/_dhanjuma" className="social twitter">
          {" "}
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/danjuma.yahaya.54943"
          className="social facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=%2B2348104203088&text&app_absent=0"
          className="social whatsapp"
        >
          {" "}
          <FaWhatsapp />
        </a>
        <a
          href="https://www.snapchat.com/add/dhanjuma?share_id=NUM5NkEzQjQtNUFDRC00Qzc1LUE4QTEtOTkwQkQ0RUFEMTE2&locale=en_NG"
          className="social snapchat"
        >
          {" "}
          <FaSnapchat />
        </a>
      </div>
    </div>
    // </footer>
  );
};
// src\personal1\logos\ig.png
