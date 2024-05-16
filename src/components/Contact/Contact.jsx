import React from "react";
import "./Contact.scss";
import ContactItem from "./ContactItem";
import Feedback from "../Feedback";

function Contact() {
  return (
    <div className="contactSection container">
      <h2 className="section-heading">Contact</h2>
      <p>
        If you're a company who is actively hiring for a remote front-end role,
        I'd love to be considered. Let's talk!
      </p>
      <ContactItem
        text="Send an e-mail"
        link="mailto:sanikapatwardhan2@gmail.com"
      />
      <ContactItem
        text="Connect on Linkedin"
        link="https://www.linkedin.com/in/sanikapatwardhan/"
      />
      <Feedback/>
    </div>
  );
}

export default Contact;
