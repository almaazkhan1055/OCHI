import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-6 md:px-20 border-b-[1px] border-zinc-700 pb-10 md:pb-20">
        <h1 className="text-5xl md:text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="p-6 md:p-10  bg-white">
        <div className="cards w-full flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <p className="text-lg md:text-xl mb-6 md:mb-10 text-black">FYDE</p>
            <motion.div
              className="cardContainer relative w-full h-[50vh] md:h-[75vh]"
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
            >
              <motion.h1 className="absolute right-0 overflow-hidden text-[#cdea68] z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-7xl md:text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h1>
              <div className="card bg-green-600 w-full h-full overflow-hidden rounded-xl">
                <motion.img
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                  className="object-cover w-full h-full"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg md:text-xl mb-6 md:mb-10 text-black">VISE</p>
            <motion.div
              className="cardContainer relative w-full h-[50vh] md:h-[75vh]"
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
            >
              <motion.h1 className="absolute right-0 overflow-hidden text-[#cdea68] z-[9] -translate-x-[350%] -translate-y-1/2 top-1/2 font-semibold text-7xl md:text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h1>
              <div className="card bg-green-600 w-full h-full overflow-hidden rounded-xl">
                <motion.img
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
