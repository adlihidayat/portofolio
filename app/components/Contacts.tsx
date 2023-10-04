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
        <span className="md:hidden md:group-hover:inline-block w-60  xl:w-80 text-center">
          CONNECT WITH ME
        </span>
      </a>
      <div className=" w-[100%] sm:hidden mt-20 flex flex-col space-y-5">
        <div className="flex w-[100%] space-x-5">
          <a
            href="https://www.instagram.com/adlihdyt/"
            className=" rounded-xl bg-[#1c1c1c] flex-1 text-white  text-left pl-7 py-10 "
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.linkedin.com/in/dhiya-adli-hidayat-3308b824a/"
            className=" rounded-xl bg-[#1c1c1c] flex-1 text-white  text-left pl-7 py-10"
          >
            LINKEDIN
          </a>
        </div>
        <div className="flex w-[100%] space-x-5 ">
          <a
            href="https://github.com/adlihidayat"
            className=" rounded-xl bg-[#1c1c1c] flex-1 text-white  text-left pl-7 py-10 "
          >
            GITHUB
          </a>
          <a
            href="https://www.youtube.com/channel/UCvUXXw6hfinnw0SReUZsTtg"
            className=" rounded-xl bg-[#1c1c1c] flex-1 text-white  text-left pl-7 py-10"
          >
            YOUTUBE
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
