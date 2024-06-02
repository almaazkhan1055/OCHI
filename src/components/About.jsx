import React from "react";
import img from "../assets/Homepage-Photo-663x469.jpg";
function About() {
  return (
    <div className="w-full bg-[#cdea68] rounded-tr-3xl rounded-tl-3xl text-black">
      <div className="p-6 md:p-20">
        <h1 className="font-['Neue_Montreal'] text-[8vw] leading-[8.5vw] md:text-[3rem] md:leading-[3rem]">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>
      <div className="w-full border-t-[1px] border-[#a1b562] mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-center py-5 px-6 md:px-20 text-xl md:text-2xl gap-6 md:gap-52 pt-16">
        <div className="w-full md:w-2/4 -mt-10 md:-mt-[15%]">
          What you can expect:
        </div>
        <div className="w-full md:w-[35%]">
          <div className="flex flex-col gap-6 md:gap-10">
            <div>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </div>
            <div>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col gap-6 md:gap-10 mt-6 md:mt-[6%]">
          <div className="flex flex-col">
            <h1 className="mb-2 md:mb-6">S:</h1> <u>Instagram</u> <u>Behance</u>
            <u>Facebook</u> <u>Linkedin</u>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 border-t-[1px] border-[#a1b562] mt-10 md:mt-20 pt-10 md:pt-10 p-6 md:p-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-7xl mb-6 md:mb-10">Our approach:</h1>
          <button className="px-6 md:px-10 uppercase py-4 md:py-6 bg-zinc-900 rounded-full text-white flex gap-6 md:gap-12 text-lg md:text-xl">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full mt-1 md:mt-[5px]"></div>
          </button>
        </div>
        <div className="w-full md:w-1/2 h-60 md:h-[70vh]">
          <img
            src={img}
            alt=""
            className="rounded-3xl w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
