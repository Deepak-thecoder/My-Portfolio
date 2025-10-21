import React from "react";

const Contact = () => (
  <section id="contact">
    <h2>Contact Me</h2>
    <p>Email: kumarsahudeepak365@gmail.com</p>
    <p>Phone: +91 6370845863</p>
    <button onClick={() => window.location = "mailto:kumarsahudeepak365@gmail.com"}>Send Email</button>
  </section>
);

export default Contact;
