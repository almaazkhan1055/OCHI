// import { motion, useAnimation } from "framer-motion";
// import React from "react";

// function Featured() {
//   const cards = [useAnimation(), useAnimation()];
//   const handleHover = (index) => {
//     cards[index].start({ y: "0" });
//   };
//   const handleHoverEnd = (index) => {
//     cards[index].start({ y: "100%" });
//   };
//   return (
//     <div className="w-full py-20">
//       <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
//         <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
//           Featured projects
//         </h1>
//       </div>
//       <div className="p-10">
//         <div className="cards w-full flex gap-10">
//           <div className="w-1/2">
//             <p className="text-xl mb-10">FYDE</p>
//             <motion.div
//               className="cardContainer relative w-full h-[75vh]"
//               onHoverStart={() => handleHover(0)}
//               onHoverEnd={() => handleHoverEnd(0)}
//             >
//               <motion.h1 className="absolute right-0 overflow-hidden text-[#cdea68] z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex ">
//                 {"FYDE".split("").map((item, index) => (
//                   <motion.span
//                     initial={{ y: "100%" }}
//                     animate={cards[0]}
//                     transition={{
//                       ease: [0.22, 1, 0.36, 1],
//                       delay: index * 0.05,
//                     }}
//                     className="inline-block"
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </motion.h1>
//               <div className="card bg-green-600 w-full h-full overflow-hidden rounded-xl">
//                 <img
//                   src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
//                   alt=""
//                 />
//               </div>
//             </motion.div>
//           </div>
//           <div className="w-1/2">
//             <p className="text-xl mb-10">VISE</p>
//             <motion.div
//               onHoverStart={() => handleHover(1)}
//               onHoverEnd={() => handleHoverEnd(1)}
//               className="cardContainer relative w-full h-[75vh]"
//             >
//               <motion.h1 className="absolute right-full text-[#cdea68] z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex">
//                 {"VISE".split("").map((item, index) => (
//                   <motion.span
//                     initial={{ y: "100%" }}
//                     animate={cards[1]}
//                     transition={{
//                       ease: [0.22, 1, 0.36, 1],
//                       delay: index * 0.05,
//                     }}
//                     className="inline-block"
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </motion.h1>
//               <div className="card overflow-hidden w-full h-full rounded-xl">
//                 <img
//                   src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
//                   alt=""
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Featured;

// import { motion, useAnimation } from "framer-motion";
// import React from "react";

// function Featured() {
//   const cards = [useAnimation(), useAnimation()];
//   const handleHover = (index) => {
//     cards[index].start({ y: "0" });
//   };
//   const handleHoverEnd = (index) => {
//     cards[index].start({ y: "100%" });
//   };
//   return (
//     <div className="w-full py-20">
//       <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
//         <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
//           Featured projects
//         </h1>
//       </div>
//       <div className="p-10">
//         <div className="cards w-full flex gap-10">
//           <div className="w-1/2">
//             <p className="text-xl mb-10">FYDE</p>
//             <motion.div
//               className="cardContainer relative w-full h-[75vh] overflow-hidden"
//               onHoverStart={() => handleHover(0)}
//               onHoverEnd={() => handleHoverEnd(0)}
//             >
//               <motion.h1 className="absolute right-0 overflow-hidden  text-[#cdea68] z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex">
//                 {"FYDE".split("").map((item, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ y: "100%" }}
//                     animate={cards[0]}
//                     transition={{
//                       ease: [0.22, 1, 0.36, 1],
//                       delay: index * 0.05,
//                     }}
//                     className="inline-block"
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </motion.h1>
//               <div className="card bg-green-600 w-full h-full overflow-hidden rounded-xl">
//                 <img
//                   src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
//                   alt="FYDE"
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </motion.div>
//           </div>
//           <div className="w-1/2">
//             <p className="text-xl mb-10">VISE</p>
//             <motion.div
//               onHoverStart={() => handleHover(1)}
//               onHoverEnd={() => handleHoverEnd(1)}
//               className="cardContainer relative w-full h-[75vh] overflow-hidden"
//             >
//               <motion.h1 className="absolute right-full text-[#cdea68] z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex overflow-hidden">
//                 {"VISE".split("").map((item, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ y: "100%" }}
//                     animate={cards[1]}
//                     transition={{
//                       ease: [0.22, 1, 0.36, 1],
//                       delay: index * 0.05,
//                     }}
//                     className="inline-block"
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </motion.h1>
//               <div className="card overflow-hidden w-full h-full rounded-xl">
//                 <img
//                   src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
//                   alt="VISE"
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Featured;

// import { motion, useAnimation } from "framer-motion";
// import React from "react";

// function Featured() {
//   const cards = [useAnimation(), useAnimation()];
//   const handleHover = (index) => {
//     cards[index].start({ y: "0", opacity: 1 });
//   };
//   const handleHoverEnd = (index) => {
//     cards[index].start({ y: "100%", opacity: 0 });
//   };
//   return (
//     <div className="w-full py-20">
//       <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
//         <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
//           Featured projects
//         </h1>
//       </div>
//       <div className="p-10">
//         <div className="cards w-full flex gap-10">
//           <div className="w-1/2">
//             <p className="text-xl mb-10">FYDE</p>
//             <motion.div
//               className="cardContainer relative w-full h-[75vh] overflow-hidden"
//               onHoverStart={() => handleHover(0)}
//               onHoverEnd={() => handleHoverEnd(0)}
//             >
//               <motion.h1
//                 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#cdea68] z-[9] top-1/2 font-semibold text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex"
//                 initial={{ y: "100%", opacity: 0 }}
//                 animate={cards[0]}
//               >
//                 {"FYDE".split("").map((item, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ y: "100%" }}
//                     transition={{
//                       ease: [0.22, 1, 0.36, 1],
//                       delay: index * 0.05,
//                     }}
//                     className="inline-block"
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </motion.h1>
//               <div className="card bg-green-600 w-full h-full overflow-hidden rounded-xl">
//                 <img
//                   src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
//                   alt="FYDE"
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </motion.div>
//           </div>
//           <div className="w-1/2">
//             <p className="text-xl mb-10">VISE</p>
//             <motion.div
//               onHoverStart={() => handleHover(1)}
//               onHoverEnd={() => handleHoverEnd(1)}
//               className="cardContainer relative w-full h-[75vh] overflow-hidden"
//             >
//               <motion.h1
//                 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#cdea68] z-[9] top-1/2 font-semibold text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex"
//                 initial={{ y: "100%", opacity: 0 }}
//                 animate={cards[1]}
//               >
//                 {"VISE".split("").map((item, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ y: "100%" }}
//                     transition={{
//                       ease: [0.22, 1, 0.36, 1],
//                       delay: index * 0.05,
//                     }}
//                     className="inline-block"
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </motion.h1>
//               <div className="card overflow-hidden w-full h-full rounded-xl">
//                 <img
//                   src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
//                   alt="VISE"
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Featured;

import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0", opacity: 1 });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%", opacity: 0 });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="p-10">
        <div className="cards w-full flex gap-10">
          <div className="w-1/2">
            <p className="text-xl mb-10">FYDE</p>
            <motion.div
              className="cardContainer relative w-full h-[75vh]"
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
            >
              <motion.h1
                className="top-[100px] -right-[100px] absolute transform translate-x-1/2 -translate-y-1/2 text-[#cdea68] z-[9] font-semibold text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex"
                initial={{ y: "100%", opacity: 0 }}
                animate={cards[0]}
              >
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
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
                <img
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt="FYDE"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
          <div className="w-1/2">
            <p className="text-xl mb-10">VISE</p>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardContainer relative w-full h-[75vh] "
            >
              <motion.h1
                className="absolute top-[100px] -left-[100px] transform -translate-x-1/2 -translate-y-1/2 text-[#cdea68] z-[9] font-semibold text-9xl leading-none tracking-tighter text-['Founders_Grotesk_X-Condensed'] flex"
                initial={{ y: "100%", opacity: 0 }}
                animate={cards[1]}
              >
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
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
              <div className="card overflow-hidden w-full h-full rounded-xl">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt="VISE"
                  className="object-cover w-full h-full"
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
