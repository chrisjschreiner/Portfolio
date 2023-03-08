import React from "react";
import "../styles/Global.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
// import Footer from "./Footer";

function App() {
  return (
    <div className="App hero__bg">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
