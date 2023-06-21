import Image from "next/image";
import React, { useState } from "react";

function Projects() {
  const [details, setDetails] = useState(0);
  const vid = [
    "none",
    "https://firebasestorage.googleapis.com/v0/b/web-portofolio-abe83.appspot.com/o/nameasy.mp4?alt=media&token=c09d3222-d6c7-4fdc-b5ee-5b1a1cd07eae",
    "https://firebasestorage.googleapis.com/v0/b/web-portofolio-abe83.appspot.com/o/glassmorphism.mp4?alt=media&token=3a9703ab-91d3-42d7-8c15-ad1f7629ae19",
    "https://firebasestorage.googleapis.com/v0/b/web-portofolio-abe83.appspot.com/o/salfiyah.mp4?alt=media&token=b015995d-53bc-42de-9a56-e3c1b5ab57f5",
    "https://firebasestorage.googleapis.com/v0/b/web-portofolio-abe83.appspot.com/o/tic%20tac%20toe.mp4?alt=media&token=a4e4518a-0c38-48d6-a5de-56ed9bd28df7",
  ];
  const title = ["none", "NAMEASY", "GLASSMORPHISM", "SALFIYAH", "TIC-TAC-TOE"];
  const desc = [
    "none",
    "find the best name easier. this web give you name recommendation and you can copy it.",
    "web that help you to design glassmophism. you can control the color, opacity, and blur. after get the perfect design, you can immediatly copy the css code",
    "a fashion web. show off the new product and their collection. i used one page site, so the user doesnt need to wait while move to other section. i also use parallax effect to make it cooler.",
    "just a normal tic tac toe game",
  ];
  const web = [
    "none",
    "https://adlihidayat.github.io/Nameasy/",
    "https://adlihidayat.github.io/glassmorphism/",
    "https://adlihidayat.github.io/salfiyah/",
    "https://adlihidayat.github.io/tic-tac-toe/",
  ];

  return (
    <div className=" relative flex flex-col justify-center items-center space-y-10 h-screen -mt-6 md:flex-row md:space-x-20">
      <h1 className=" text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3B3B3B]">
        Projects
      </h1>
      <div className="  flex justify-center space-x-1 md:space-x-2 w-[80%] sm:w-[500px] md:w-[600px] xl:w-[700px] 2xl:w-[900px]">
        <div
          onClick={() => setDetails(1)}
          className=" animate-project1-mobile xl:animate-project1-dekstop flex-1 md:hover:flex-none md:hover:w-[450px] lg:hover:w-[500px] xl:hover:w-[600px] 2xl:hover:w-[700px] duration-500 ease-in-out h-80 sm:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-slate-200"
        >
          <Image src="/nameasy.png" className=" h-[100%] object-cover" alt="" />
        </div>
        <div
          onClick={() => setDetails(2)}
          className=" animate-project2-mobile xl:animate-project2-dekstop flex-1 md:hover:flex-none md:hover:w-[450px] lg:hover:w-[500px] xl:hover:w-[600px] 2xl:hover:w-[700px] duration-500 ease-in-out h-80 sm:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-slate-200 mt-10"
        >
          <Image
            src="/glassmorphism.png"
            className=" h-[100%] object-cover"
            alt=""
          />
        </div>
        <div
          onClick={() => setDetails(3)}
          className=" animate-project1-mobile xl:animate-project1-dekstop flex-1 md:hover:flex-none md:hover:w-[450px] lg:hover:w-[500px] xl:hover:w-[600px] 2xl:hover:w-[700px] duration-500 ease-in-out h-80 sm:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-slate-200"
        >
          <Image
            src="/salfiyah.png"
            className=" h-[100%] object-cover"
            alt=""
          />
        </div>
        <div
          onClick={() => setDetails(4)}
          className=" animate-project2-mobile xl:animate-project2-dekstop flex-1 md:hover:flex-none md:hover:w-[450px] lg:hover:w-[500px] xl:hover:w-[600px] 2xl:hover:w-[700px] duration-500 ease-in-out h-80 sm:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-slate-200 mt-10"
        >
          <Image
            src="/tictactoe.png"
            className=" h-[100%] object-cover"
            alt=""
          />
        </div>
      </div>
      {details !== 0 && (
        <div className="fixed -top-10 z-40 w-screen h-screen md:-left-20 ">
          <div className=" z-50 bg-[#282828] md:bg-transparent md:bg-gradient-to-b md:from-transparent md:to-black absolute bottom-0 w-screen h-auto flex flex-col md:flex-row md:justify-center md:space-x-10 space-y-5 items-center pt-16 pb-10 rounded-tl-[40px] rounded-tr-[40px] md:rounded-tl-[0px] md:rounded-tr-[0px]">
            <div className=" bg-slate-400 w-[80%] md:w-[400px] h-[200px] ">
              <video autoPlay loop src={vid[details]} />
            </div>
            <div className="flex flex-col space-y-3 w-[80%] text-[#F7F7F7] md:w-[500px] xl:w-[600px]">
              <h1 className=" text-2xl font-semibold">
                {title[details]} (PERSONAL PROJECT)
              </h1>
              <p>{desc[details]}</p>
              <a href={web[details]}>
                <button className=" py-2 w-[115px] bg-[#FF4A4A] sm:hover:bg-[#0F0C31] duration-300 ease-in-out   rounded-full font-semibold">
                  VISIT SITE
                </button>
              </a>
            </div>
          </div>
          <div
            className=" h-screen w-screen bg-black md:bg-transparent opacity-30 absolute z-40"
            onClick={() => setDetails(0)}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Projects;
