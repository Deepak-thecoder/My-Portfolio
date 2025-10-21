import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./themeContext";

const App = () => (
  <ThemeProvider>
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </ThemeProvider>
);

export default App;
