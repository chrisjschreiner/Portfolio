import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import Project from "./Project";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App hero__bg">
      <Navbar />
      <Hero />
      <About />
      {/* <Service /> */}
      <Project />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
