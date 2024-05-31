import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="py-20 rounded-tr-3xl rounded-tl-3xl w-full bg-[#004d43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none text-[Founders_Grotesk_X-Condensed] font-semibold uppercase mb-10 pt-5 tracking-tighter pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none text-[Founders_Grotesk_X-Condensed] font-semibold uppercase mb-10 pt-5 tracking-tighter pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
