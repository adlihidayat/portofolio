"use client";

import NavBar from "./components/NavBar";
import { useEffect, useRef, useState } from "react";
import PageNumber from "./components/PageNumber";
import HomeMenu from "./components/Homemenu";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contacts from "./components/Contacts";
import Image from "next/image";
import HomePage from "./components/Home";

export default function Home() {
  // const [position, setPosition] = useState(1);

  // useEffect(() => {
  //   const handleScroll = (e: any) => {
  //     const sections = document.querySelectorAll("section");
  //     var current = "";

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop - 150;
  //       const sectionHeight = section.offsetHeight;
  //       const id = section.getAttribute("id");
  //       if (
  //         window.scrollY >= sectionTop &&
  //         window.scrollY < sectionTop + sectionHeight
  //       ) {
  //         console.log(id);
  //         if (id === "Home") {
  //           setPosition(1);
  //         }
  //         if (id === "Projects") {
  //           setPosition(2);
  //         }
  //         if (id === "Tech") {
  //           setPosition(3);
  //         }
  //       }
  //     });
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <main className=" w-[100%]  font-inter bg-[#111111] overflow-hidden pb-14">
      <HomePage />
      <Projects />
      <Tech />
      <Contacts />
      <NavBar />
    </main>
  );
}
