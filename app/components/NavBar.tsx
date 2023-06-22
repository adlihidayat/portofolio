import Image from "next/image";
import React, { useEffect, useState } from "react";
import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedIn.svg";
import github from "../../public/github.svg";
import gmail from "../../public/gmail.svg";

type Props = {
  Home: (event: React.MouseEvent<HTMLElement>) => void;
  Projects: (event: React.MouseEvent<HTMLElement>) => void;
  Tech: (event: React.MouseEvent<HTMLElement>) => void;
  Contacts: (event: React.MouseEvent<HTMLElement>) => void;
  position: any;
};

function NavBar({ position, Home, Projects, Tech, Contacts }: Props) {
  const [bgPosMobile, setBgPosMobile] = useState("-left-[9.3%]");
  const [color, setColor] = useState("text-[#F7F7F7]");
  const [clicked, setClicked] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("adlihidayat30@gmail.com");
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };

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
      setColor("text-[#F7F7F7]");
    } else if (position == 2) {
      setColor("text-[#3B3B3B]");
    } else if (position == 3) {
      setColor("text-[#3B3B3B]");
    } else if (position == 4) {
      setColor("text-[#F7F7F7]");
    }
  }, [position]);

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

  return (
    <div className=" w-screen fixed bottom-[5%] flex items-center justify-around">
      <div className={`space-x-6 hidden lg:flex`}>
        <a className="w-7 h-7 relative">
          <p
            className={` text-white absolute duration-300 -top-10 -right-6 rounded-xl bg-black py-1 px-2 ${
              !clicked && "hidden"
            }`}
          >
            copied!
          </p>
          <Image
            width={7}
            height={7}
            src={gmail}
            alt="gmail"
            onClick={copyEmail}
            className={`w-7 h-7 ease-in-out cursor-pointer ${
              position === 1 && "svg-fill"
            } ${position === 4 && "hidden"}`}
          />
        </a>
        <a className="w-7 h-7" href="https://www.instagram.com/adlihdyt/">
          <Image
            src={instagram}
            width={7}
            height={7}
            alt="instagram"
            className={`w-7 h-7 ease-in-out ${position === 1 && "svg-fill"} ${
              position === 4 && "hidden"
            }`}
          />
        </a>
        <a className="w-7 h-7" href="https://github.com/adlihidayat">
          <Image
            width={7}
            height={7}
            src={github}
            alt="github"
            className={`w-7 h-7 ease-in-out ${position === 1 && "svg-fill"} ${
              position === 4 && "hidden"
            }`}
          />
        </a>
        <a
          className="w-7 h-7"
          href="https://www.linkedin.com/in/dhiya-adli-hidayat-3308b824a/"
        >
          <Image
            width={7}
            height={7}
            src={linkedin}
            alt="linkedin"
            className={`w-7 h-7 ease-in-out ${position === 1 && "svg-fill"} ${
              position === 4 && "hidden"
            }`}
          />
        </a>
      </div>
      <ul className=" flex bg-[#FEFEFE] text-[#202020] space-x-8  text-base  font py-[6px] px-[14px] relative rounded-full text-[2vw] shadow-lg">
        <li
          className={`z-30 cursor-pointer duration-1000 ${
            position == 1 && "text-white"
          }`}
          onClick={Home}
        >
          Home
        </li>
        <li
          className={`z-30 cursor-pointer duration-1000 ${
            position == 2 && "text-white"
          }`}
          onClick={Projects}
        >
          Projects
        </li>
        <li
          className={`z-30 cursor-pointer duration-1000 ${
            position == 3 && "text-white"
          }`}
          onClick={Tech}
        >
          Tech
        </li>
        <li
          className={`z-30 cursor-pointer duration-1000 ${
            position == 4 && "text-white"
          }`}
          onClick={Contacts}
        >
          Contacts
        </li>
        <li
          className={`h-8 bg-[#202020] absolute z-20 duration-[650ms] ease-in-out ${bgPosMobile} top-[2px] rounded-2xl`}
        ></li>
      </ul>
      <p className={`hidden lg:block ${color}`}>
        {day}, {date} {month} {year}
      </p>
    </div>
  );
}

export default NavBar;
