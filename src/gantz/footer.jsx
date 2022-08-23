import React from "react";
import "./gantz.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaSnapchat,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};
