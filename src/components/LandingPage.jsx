import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textStructure mt-60 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden ">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "7vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[7vw] h-[4.5vw] relative -top-2  rounded-md"
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
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20 text-xl">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 font-light py-2 rounded-full border-[1px] border-zinc-400">
            Start the project
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center">
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
