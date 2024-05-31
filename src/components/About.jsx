import React from "react";
import img from "../assets/Homepage-Photo-663x469.jpg";

function About() {
  return (
    <div className="w-full bg-[#cdea68] rounded-tr-3xl rounded-tl-3xl text-black">
      <div className="p-20">
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
      </div>
      <div className="w-full border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20 text-2xl gap-52">
        <div className=" w-2/4 -mt-[15%]">What you can expect:</div>
        <div className=" w-[35%]">
          <div className="flex flex-col gap-10">
            <div>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people
            </div>
            <div>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-10 mt-[6%]">
          <div className="flex flex-col ">
            <h1 className="mb-6">S:</h1>
            <u>Instagram</u>
            <u>Behance</u>
            <u>Facebook</u>
            <u>Linkedin</u>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 border-t-[1px] border-[#a1b562] mt-20 pt-10 p-20">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="px-10 uppercase py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-12 text-xl">
            Read More{" "}
            <div className="w-3 h-3 bg-zinc-100 rounded-full mt-[5px]"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
          <img src={img} alt="" className=" rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
