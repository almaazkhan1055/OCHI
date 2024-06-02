import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("data-scroll-section"),
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      className="w-full min-h-screen text-white bg-zinc-900 overflow-hidden"
      data-scroll-container
    >
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
