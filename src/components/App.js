import "../styles/Global.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import gsap from "gsap";
// import Footer from "./Footer";

function App() {
  let timeline = gsap.timeline();
  return (
    <div className="App hero__bg">
      <Navbar timeline={timeline} />
      <Hero timeline={timeline} />
      <About timeline={timeline} />
      <Project />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
