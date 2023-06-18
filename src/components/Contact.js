import { useEffect, useRef } from "react";
import "../styles/Contact.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contact_reveal = useRef(null);

  useEffect(() => {
    const el = contact_reveal.current;
    gsap.from(el, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  return (
    <section ref={contact_reveal} id="contact" className="contact__container">
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
