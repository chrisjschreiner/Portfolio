import React from "react";
import "../styles/Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact__container">
      <h2 className="contact__heading">What's Next?</h2>
      <h2 className="title">Get In Touch</h2>
      <p className="contact__blurb">
        Thanks for stopping by! I'm currently looking to join a creative and
        passionate team of developers. If you think we'd be a good fit, email me
        at chrisjschreiner@gmail.com, or click below to say hello!
      </p>
      <div>
        <a
          className="contact__link"
          href="mailto:chrisjschreiner@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
