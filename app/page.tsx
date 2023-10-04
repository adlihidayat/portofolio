"use client";

import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contacts from "./components/Contacts";
import HomePage from "./components/Home";

export default function Home() {
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
