import React from "react";
import "./Contact.css";
import contactImg from "../assets/about-9.jpg";

function Contact() {
  return (
    <div className="contact component__space" id="contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>541-633-9456</strong> or email{" "}
                <strong>chrisjschreiner@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input type="text" className="contact name" placeholder="Name" />
              <input
                type="text"
                className="contact email"
                placeholder="Email"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
