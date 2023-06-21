"use client";

import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import PageNumber from "./components/PageNumber";
import HomeMenu from "./components/Homemenu";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contacts from "./components/Contacts";

export default function Home() {
  const [position, setPosition] = useState(1);

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <main className=" h-screen w-screen  font-inter">
      <PageNumber position={position} />
      {/* <p>pppp</p> */}
      {position === 1 && <HomeMenu />}
      {position === 2 && <Projects />}
      {position === 3 && <Tech />}
      {position === 4 && <Contacts />}
      <NavBar
        position={position}
        Home={() => setPosition(1)}
        Projects={() => setPosition(2)}
        Tech={() => setPosition(3)}
        Contacts={() => setPosition(4)}
      />
      {/* <SeeMore /> */}
    </main>
  );
}
