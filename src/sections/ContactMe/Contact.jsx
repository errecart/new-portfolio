import React, { useRef, useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [copy, setCopy] = useState("");
  const form = useRef();

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopy(text);
    setTimeout(() => {
      setCopy("");
    }, 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_igi2oux", "template_tn9nzrj", form.current, {
        publicKey: "w88JNMTMZoxvMCwHw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container" id="contact">
      <h2>Contact Me</h2>
      <div className="contact">
        <h3>Do you have any Question?</h3>
        <div className="contact-container">
          <div className="item-c">
            <FontAwesomeIcon icon={faGithub} className="icon-contact" />
            <h4>Github</h4>
            <span>
              <a href="https://github.com/errecart" target="_blanck">
                Github
              </a>
            </span>
          </div>
          <div className="item-c">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon-contact" />
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
            <FontAwesomeIcon icon={faEnvelope} className="icon-contact" />
            <h4>Email</h4>
            <span onClick={() => copyText("jierrecart5@gmail.com")}>jierrecart5@gmail.com</span>
          </div>
          <div className="item-c">
            <FontAwesomeIcon icon={faPhone} className="icon-contact" />
            <h4>Phone</h4>
            <span onClick={() => copyText("+54 01122395514")}>+54 01122395514</span>
          </div>
        </div>
        {copy && <div className="tooltip">Copy!!</div>}
        <div className="contact-form">
          <h3>Send me and Email</h3>
          <form ref={form} onSubmit={sendEmail}>
            <label>Full-Name</label>
            <input type="text" name="user_name"/>
            <label>Topic</label>
            <input type="text" name="user_subject"/>
            <label>Email</label>
            <input type="email" name="email"/>
            <label>Message</label>
            <textarea name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
