import React from "react";

function Contacts() {
  return (
    <div className="bg-[#202020] w-screen h-screen text-[#f7f7f7]">
      <div className="flex w-screen h-[50%]">
        <div className=" w-[50%] h-[100%] border-b border-r border-[#f7f7f7] flex flex-col items-end justify-end">
          <div className="flex pb-4 pr-4">
            <div className=" w-6 md:w-[50px] xl:w-[60px] h-6 md:h-[50px] xl:h-[60px] bg-[#f7f7f7] rounded-full"></div>
            <div className=" w-6 md:w-[50px] xl:w-[60px] h-6 md:h-[50px] xl:h-[60px] border border-[#f7f7f7] rounded-full"></div>
            <div className=" w-6 md:w-[50px] xl:w-[60px] h-6 md:h-[50px] xl:h-[60px] bg-[#f7f7f7] rounded-full"></div>
            <div className=" w-6 md:w-[50px] xl:w-[60px] h-6 md:h-[50px] xl:h-[60px] bg-[#f7f7f7] rounded-full"></div>
            <div className=" w-6 md:w-[50px] xl:w-[60px] h-6 md:h-[50px] xl:h-[60px] border border-[#f7f7f7] rounded-full"></div>
          </div>
        </div>
        <div className="w-[50%] h-[100%] border-b border-[#f7f7f7] flex flex-col justify-end text-2xl xl:text-4xl font-light">
          <div className="w-[100%} h-[25%] flex items-center ">
            <a
              className=" ml-5 cursor-pointer"
              target="_blank"
              href="https://www.instagram.com/adlihdyt/"
            >
              INSTAGRAM
            </a>
          </div>
          <div className="w-[100%} h-[50%] ">
            <div className="w-[100%} h-[50%] border-y border-[#f7f7f7] flex items-center ">
              <a
                className=" ml-5 cursor-pointer"
                target="_blank"
                href="https://www.linkedin.com/in/dhiya-adli-hidayat-3308b824a/"
              >
                LINKEDIN
              </a>
            </div>
            <div className="w-[100%} h-[50%] flex items-center">
              <a
                className=" ml-5 cursor-pointer"
                target="_blank"
                href="https://github.com/adlihidayat"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className=" pl-5 sm:pl-[10%] pt-10 xl:pt-[90px] text-[32px] sm:text-[52px] lg:text-[72px] xl:text-[92px] font-medium">
          Let's work together
        </p>
      </div>
    </div>
  );
}

export default Contacts;
