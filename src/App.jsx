import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 1,
    smartphone: {
      smooth: !0,
      breakpoint: 767,
    },
    tablet: {
      smooth: !1,
      breakpoint: 1024,
    },
  });
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900 overflow-hidden  ">
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
