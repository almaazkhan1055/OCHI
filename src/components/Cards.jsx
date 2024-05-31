import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5  text-xl">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004d43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="px-5 py-3 rounded-full border-[1px] absolute left-10 bottom-10 text-[#eded57] border-[#eded57]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#10211e]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="px-5 py-3 rounded-full border-[1px] absolute left-10 bottom-10">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#10211e]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
            className="w-4/12"
          />
          <button className="px-5 py-3 rounded-full border-[1px] absolute left-10 bottom-10">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
