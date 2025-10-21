import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button onClick={toggleTheme}>{theme === "dark" ? "Light Mode" : "Dark Mode"}</button>
    </nav>
  );
};

export default Navbar;
