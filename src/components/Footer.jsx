import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp  } from "react-icons/fa";

const Footer = () => (
  <footer>
    <p>© 2025 Deepak Kumar Sahu. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://github.com/Deepak-thecoder" target="_blank"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/deepak-kumar-sahu-9b27ba359/" target="_blank"><FaLinkedin /></a>
      <a href="https://wa.me/919876543210" target="_blank"><FaWhatsapp /></a>
    </div>
  </footer>
);

export default Footer;
