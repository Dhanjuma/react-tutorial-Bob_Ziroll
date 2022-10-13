import React from "react";
import "./style.css";
// import cat1 from "./images/mr-whiskerson.png";
// import cat2 from "./images/fluffykins.png";
// import cat3 from "./images/felix.png";
// import cat4 from "./images/pumpkin.png";
import phone_img from "./images/phone-icon.png";
import mail_img from "./images/mail-icon.png";
/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/
export const Card = ({ img, name, phone, email }) => {
  return (
    <div>
      <div className="contact-card">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div className="info-group">
          <img src={phone_img} alt="" />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src={mail_img} alt="" />
          <p>{email}</p>
        </div>
      </div>

      {/* <div className="contact-card">
        <img src={cat2} alt="" />
        <h3>Fluffykins</h3>
        <div className="info-group">
          <img src={phone} alt="" />
          <p>(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img src={mail} alt="" />
          <p>fluff@me.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={cat3} alt="" />
        <h3>Felix</h3>
        <div className="info-group">
          <img src={phone} alt="" />
          <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
          <img src={mail} alt="" />
          <p>thecat@hotmail.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={cat4} alt="" />
        <h3>Pumpkin</h3>
        <div className="info-group">
          <img src={phone} alt="" />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src={mail} alt="" />
          <p>pumpkin@scrimba.com</p>
        </div>
      </div> */}
    </div>
  );
};
