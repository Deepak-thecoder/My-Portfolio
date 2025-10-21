import React from "react";
import myPhoto from "../assets/Deepak.jpg"; 

const Header = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="header-container">
        <img src={myPhoto} alt="Deepak Kumar Sahu" className="profile-photo" />
        <h1>Deepak Kumar Sahu</h1>
        <p>Full Stack Developer | Java | Spring Boot | React</p>
        <button onClick={scrollToContact}>Contact Me</button>
      </div>
    </header>
  );
};

export default Header;
