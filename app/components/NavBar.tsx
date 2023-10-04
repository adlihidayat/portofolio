import Image from "next/image";
import React, { useEffect, useState } from "react";
import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedIn.svg";
import github from "../../public/github.svg";
import gmail from "../../public/gmail.svg";

function NavBar() {
  const [bgPosMobile, setBgPosMobile] = useState("-left-[9.3%]");
  const [color, setColor] = useState("text-[#F7F7F7]");
  const [position, setPosition] = useState(1);

  const dateData = new Date();
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];

  const day = weekDay[dateData.getDay()];
  const date = dateData.getDate();
  const month = months[dateData.getMonth()];
  const year = dateData.getFullYear();

  useEffect(() => {
    if (position == 1) {
      setBgPosMobile("-left-[8.9%] w-[70px]");
    } else if (position == 2) {
      setBgPosMobile("left-[12.5%] w-[93px]");
    } else if (position == 3) {
      setBgPosMobile("left-[40.5%] w-[70px]");
    } else if (position == 4) {
      setBgPosMobile("left-[62%] w-[93px]");
    }
  }, [position]);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const sections = document.querySelectorAll("section");
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          setPosition(4);
        } else if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          console.log(id);
          if (id === "Home") {
            setPosition(1);
          }
          if (id === "Projects") {
            setPosition(2);
          }
          if (id === "Tech") {
            setPosition(3);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" w-screen fixed bottom-[5%] flex items-center justify-around">
      <div className={`space-x-6 hidden lg:flex`}>
        <div className="group relative flex justify-center">
          <span className="w-0 group-hover:w-16 text-center text-transparent group-hover:text-[#111111] rounded-full px-2 absolute bg-transparent group-hover:bg-white group-hover:-translate-y-10 duration-500 ease-in-out">
            Email
          </span>
          <a className="w-7 h-7 relative" href="mailto:adlihidayat30@gmail.com">
            <Image
              loading="eager"
              width={28}
              height={28}
              src={gmail}
              alt="gmail"
              className={`w-7 h-7 ease-in-out cursor-pointer svg-fill`}
            />
          </a>
        </div>
        <div className="group relative flex justify-center">
          <span className="w-0 group-hover:w-24 text-center text-transparent group-hover:text-[#111111] rounded-full px-2 absolute bg-transparent group-hover:bg-white group-hover:-translate-y-10 duration-500 ease-in-out ">
            Instagram
          </span>
          <a className="w-7 h-7" href="https://www.instagram.com/adlihdyt/">
            <Image
              loading="eager"
              src={instagram}
              width={28}
              height={28}
              alt="instagram"
              className={`w-7 h-7 ease-in-out svg-fill`}
            />
          </a>
        </div>
        <div className="group relative flex justify-center">
          <span className="w-0 group-hover:w-20 text-center text-transparent group-hover:text-[#111111] rounded-full px-2 absolute bg-transparent group-hover:bg-white group-hover:-translate-y-10 duration-500 ease-in-out">
            Github
          </span>
          <a className="w-7 h-7" href="https://github.com/adlihidayat">
            <Image
              loading="eager"
              width={28}
              height={28}
              src={github}
              alt="github"
              className={`w-7 h-7 ease-in-out svg-fill`}
            />
          </a>
        </div>
        <div className="group relative flex justify-center">
          <span className="w-0 group-hover:w-24 text-center text-transparent group-hover:text-[#111111] rounded-full px-2 absolute bg-transparent group-hover:bg-white group-hover:-translate-y-10 duration-500 ease-in-out ">
            LinkedIn
          </span>
          <a
            className="w-7 h-7"
            href="https://www.linkedin.com/in/dhiya-adli-hidayat-3308b824a/"
          >
            <Image
              loading="eager"
              width={28}
              height={28}
              src={linkedin}
              alt="linkedin"
              className={`w-7 h-7 ease-in-out svg-fill`}
            />
          </a>
        </div>
      </div>
      <ul className=" flex bg-[#FEFEFE] text-[#202020] space-x-8  text-base  font py-[6px] px-[14px] relative rounded-full text-[2vw] shadow-lg">
        <li
          className={`z-30 cursor-pointer duration-1000 ${
            position === 1 && "text-white"
          }`}
        >
          <a href="#Home" onClick={() => setPosition(1)}>
            Home
          </a>
        </li>
        <li
          className={`z-30 cursor-pointer duration-1000 ${
            position === 2 && "text-white"
          }`}
        >
          <a href="#Projects" onClick={() => setPosition(2)}>
            Projects
          </a>
        </li>
        <li
          className={`z-30 cursor-pointer duration-1000 ${
            position === 3 && "text-white"
          }`}
        >
          <a href="#Tech" onClick={() => setPosition(3)}>
            Tech
          </a>
        </li>
        <li
          className={`z-30 cursor-pointer duration-1000 ${
            position === 4 && "text-white"
          }`}
        >
          <a href="#Contacts" onClick={() => setPosition(4)}>
            Contacts
          </a>
        </li>
        <li
          className={`h-8 bg-[#202020] absolute z-10 duration-[650ms] ease-in-out ${bgPosMobile} top-[2px] rounded-2xl`}
        ></li>
      </ul>
      <p className={`hidden lg:block ${color}`}>
        {day}, {date} {month} {year}
      </p>
    </div>
  );
}

export default NavBar;
