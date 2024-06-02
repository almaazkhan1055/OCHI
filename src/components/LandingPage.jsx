import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="hero w-full md:h-auto h-screen bg-zinc-900 pt-1 "
    >
      <div className="textStructure mt-60 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "7vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[7vw] h-[4.5vw] relative -top-2 rounded-md"
                >
                  <img
                    className="h-[60px]"
                    src="https://as1.ftcdn.net/v2/jpg/07/91/11/38/1000_F_791113897_jWeJtXX43lIdNI2xguBsfHwbhMBTN8zw.jpg"
                    alt=""
                  />
                </motion.div>
              )}
              <h1 className="tracking-tighter leading-[6vw] text-[6vw] text-['Founders_Grotesk_X-Condensed'] font-semibold uppercase">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-5 text-xl md:text-2xl md:flex-col md:items-center md:gap-5 md:px-10 md:py-10 gap-3">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="tracking-tight leading-none md:text-center">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5 md:flex-col md:items-center md:gap-3">
          <div className="px-5 py-2 rounded-full border-[1px] border-zinc-400">
            Start the project
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center md:mt-3">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
