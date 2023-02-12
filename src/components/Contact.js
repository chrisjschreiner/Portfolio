import React from "react";
import "../styles/Contact.css";
import me3 from "../assets/me3.jpg";
import { Fade } from "react-reveal";

function Contact() {
  return (
    <div className="contact component__space" id="contact">
      <div className="row">
        <Fade bottom>
          <div className="col__2">
            {/* <div className="contact__box"> */}
            {/* <div className="contact__meta"> */}
            <h1 className="hire__text underline">Contact</h1>
            <p className="hire__text white">
              I am available for freelance work. Connect with me via phone:
            </p>
            <p className="hire__text white">
              <strong>541-633-9456</strong> or email{" "}
              <strong>chrisjschreiner@gmail.com</strong>
            </p>
            {/* </div> */}
            {/* <div className="input__box"> */}
            <input type="text" className="contact name" placeholder="Name" />
            <input type="text" className="contact email" placeholder="Email" />
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
            {/* </div> */}
            {/* </div> */}
          </div>
        </Fade>
        <Fade bottom>
          <div className="col__2">
            <div>
              <img src={me3} alt="" className="contact__img" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;
