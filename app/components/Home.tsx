import Image from "next/image";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

function HomePage() {
  const front = useRef<any>(null);
  const back = useRef<any>(null);
  const container = useRef<any>(null);
  const job = ["FRONT END WEB DEV", "UNIVERSITY STUDENT", "HUMAN"];

  useEffect(() => {
    const mouseMove = (e: any) => {
      const x = e.clientX;
      const y = e.clientY;
      front.current.style.transform = `translate(${(x - x / 2) / 800}%, ${
        y / 800
      }%)`;
      back.current.style.transform = `translate(${(x - x / 2) / 150}%, ${
        y / 150
      }%)`;
    };

    document.addEventListener("mousemove", mouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      id="Home"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      ref={container}
      className=" relative w-screen  h-[95vh] xl:h-screen xl:pb-40 flex flex-col items-center justify-center  text-center font-bold "
    >
      <h1 className=" w-80 md:w-[520px] xl:w-[820px] text-[#E2F600] leading-11 xl:leading-[85px] tracking-tighter text-5xl md:text-7xl xl:text-8xl">
        HI, MY NAME IS ADLI. I AM
      </h1>
      <div className="h-[100px] xl:h-[160px] overflow-hidden">
        <motion.div
          animate={{
            y: [0, -172, -340, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            times: [0, 1, 3, 4, 5],
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {job.map((e, index) => (
            <h1
              key={index}
              className="h-[170px] w-80 xl:w-[550px] text-white leading-11 xl:leading-[85px] tracking-tighter text-5xl md:text-6xl xl:text-8xl"
            >
              {e}
            </h1>
          ))}
        </motion.div>
      </div>
      <motion.div
        ref={back}
        className={` w-[100%] h-[100%] absolute ease-in-out `}
      >
        <Image
          src={"/tech/js.svg"}
          width={100}
          height={100}
          alt=""
          className="absolute w-16 lg:w-24 xl:w-32 right-[10%] lg:right-[15%] 2xl:right-[25%] top-[60%] md:w-max  "
        />
        <Image
          src={"/tech/nextjs.svg"}
          width={100}
          height={100}
          alt=""
          className=" absolute w-24  md:w-32 xl:w-40 right-[30%] lg:right-[45%] top-[8%] "
        />
        <Image
          src={"/tech/react.svg"}
          width={100}
          height={100}
          alt=""
          className="absolute w-20 lg:w-24 xl:w-40 left-[5%] lg:left-[10%] xl:left-[15%] top-[65%] lg:top-[55%] "
        />
      </motion.div>
      <motion.div
        ref={front}
        className=" w-[100%] h-[100%] absolute ease-in-out"
      >
        <Image
          src={"/tech/css.svg"}
          width={100}
          height={100}
          alt=""
          className="absolute w-24 lg:w-36 xl:w-44 sm:w-28 left-[5%] top-[20%] 2xl:left-[20%]"
        />
        <Image
          src={"/tech/html.svg"}
          width={100}
          height={100}
          alt=""
          className="absolute  w-20 lg:w-32 xl:w-44 2xl:w-40 sm:w-24 right-[5%] lg:right-[15%] top-[25%]"
        />
        <Image
          src={"/tech/tailwind.svg"}
          width={100}
          height={100}
          alt=""
          className="absolute w-24 lg:w-32 xl:w-44 left-[35%] 2xl:left-[40%] top-[75%] lg:top-[70%] 2xl:lg:top-[80%] "
        />
      </motion.div>
    </motion.section>
  );
}

export default HomePage;
