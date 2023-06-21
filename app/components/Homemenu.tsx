import React from "react";

function HomeMenu() {
  return (
    <div className=" bg-[#202020] w-screen h-screen flex flex-col justify-center overflow-x-hidden relative">
      <h1 className=" text-[#F7F7F7] text-[60px] sm:text-7xl md:text-8xl xl:text-[110px] font-bold  md:font-medium leading-[60px] ml-[10%] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
        Hi, my name is Adli I am
      </h1>
      <div className=" h-[120px] md:h-[200px] lg:h-[200px] xl:h-[240px] 2xl:h-[100px] overflow-hidden lg:absolute lg:left-[18%] 2xl:left-[15%] top-[50%]">
        <ul className=" animate-slot-machine-mobile sm:animate-slot-machine-sm md:animate-slot-machine-md lg:animate-slot-machine-lg xl:animate-slot-machine-xl 2xl:animate-slot-machine-2xl text-[#76E6FF] text-[60px] sm:text-7xl md:text-8xl xl:text-[110px] font-bold md:font-medium  leading-[60px] ml-[10%] h-[20%] md:w-[800px] lg:w-[800px] 2xl:w-[1200px]  flex flex-col space-y-10">
          <li>front end developer</li>
          <li>University student</li>
          <li>Human</li>
          <li className="pt-4 md:pt-12 xl:pt-20 2xl:pt-0">man</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeMenu;
