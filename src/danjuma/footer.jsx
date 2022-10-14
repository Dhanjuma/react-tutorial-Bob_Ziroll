import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareWhatsapp,
  // faSquareSnapchat,
  faSquareTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="social-list">
        {" "}
        <a href="https://www.instagram.com/dan_jhuma" className="socialz ig">
          <FontAwesomeIcon icon={faSquareInstagram} />
        </a>
        <a href="https://twitter.com/_dhanjuma" className="socialz twitter">
          <FontAwesomeIcon icon={faSquareTwitter} />
        </a>
        <a
          href="https://www.facebook.com/danjuma.yahaya.54943"
          className="socialz facebook"
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=%2B2348104203088&text&app_absent=0"
          className="socialz whatsapp"
        >
          <FontAwesomeIcon icon={faSquareWhatsapp} />
        </a>
        {/* <a
          href="https://www.snapchat.com/add/dhanjuma?share_id=NUM5NkEzQjQtNUFDRC00Qzc1LUE4QTEtOTkwQkQ0RUFEMTE2&locale=en_NG"
          className="social snapchat"
        >
          <FontAwesomeIcon icon={faSquareSnapchat} />
        </a> */}
      </div>
    </footer>
  );
};
