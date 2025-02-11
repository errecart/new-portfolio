import React, {useState } from "react";
import "./Contact.css";


const Contact = () => {
  const [copy, setCopy] = useState("");

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopy(text);
    setTimeout(() => {
      setCopy("");
    }, 2000);
  };


  return (
    <div className="container" id="contact">
      <h2>Contact Me</h2>
      <div className="contact">
        <div className="contact-container">
          <div className="item-c">
            <img src="assets/icons/contact/github.svg" alt="contact icons" />
            <h4>Github</h4>
            <span>
              <a href="https://github.com/errecart" target="_blanck">
                errecart
              </a>
            </span>
          </div>
          <div className="item-c">
            <img src="assets/icons/contact/linkedin.svg" alt="contact icons" />
            <h4>Linkdedin</h4>
            <span>
              <a
                href="https://www.linkedin.com/in/juan-ignacio-errecart-585431283/"
                target="_blanck"
              >
                Link-Perfil
              </a>
            </span>
          </div>
          <div className="item-c">
            <img src="assets/icons/contact/gmail.svg" alt="contact icons" />
            <h4>Email</h4>
            <span onClick={() => copyText("jierrecart5@gmail.com")}>jierrecart5@gmail.com</span>
          </div>
          <div className="item-c">
            <img src="assets/icons/contact/phone.svg" alt="contact icons" />
            <h4>Phone</h4>
            <span onClick={() => copyText("+54 01122395514")}>+54 01122395514</span>
          </div>
        </div>
        {copy && <div className="tooltip">Copy!!</div>}
      </div>
    </div>
  );
};

export default Contact;
