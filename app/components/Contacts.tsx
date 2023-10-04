import React from "react";

function Contacts() {
  return (
    <section
      id="Contacts"
      className="pb-40 w-screen px-[5%] py-20 md:px-[13%] text-[18px] md:text-2xl xl:text-3xl "
    >
      <a
        href="mailto:adlihidayat30@gmail.com"
        className="group hover:text-[#F0FE6E] bg-[#F0FE6E] hover:bg-transparent border-2 border-transparent hover:border-[#F0FE6E] py-4 px-7 rounded-full duration-500"
      >
        <span className="hidden md:inline-block md:group-hover:hidden w-60  xl:w-80 text-center">
          CLICK ME PLS
        </span>
        <span className=" hidden md:group-hover:inline-block w-60  xl:w-80 text-center">
          CONNECT WITH ME
        </span>
      </a>
      <div className=" w-[100%] grid-cols-2 sm:hidden mt-20">
        <button className=" rounded-xl bg-[#1c1c1c] text-white w-[48%] text-left pl-7 py-10 mr-[4%] mb-[4%]">
          INSTAGRAM
        </button>
        <button className=" rounded-xl bg-[#1c1c1c] text-white w-[48%] text-left pl-7 py-10">
          LINKEDIN
        </button>
        <button className=" rounded-xl bg-[#1c1c1c] text-white w-[48%] text-left pl-7 py-10 mr-[4%]">
          GITHUB
        </button>
        <button className=" rounded-xl bg-[#1c1c1c] text-white w-[48%] text-left pl-7 py-10">
          YOUTUBE
        </button>
      </div>
    </section>
  );
}

export default Contacts;
