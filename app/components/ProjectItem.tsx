import React, { useState } from "react";
import { easeInOut, motion, Variants } from "framer-motion";
import Image from "next/image";

function ProjectItem({
  link,
  img,
  title,
  position,
  active,
  setActive,
  delay,
  textDetail,
}: any) {
  const color = [
    "bg-[#FF8585]",
    "bg-[#C2FF85]",
    "bg-[#85A0FF]",
    "bg-[#C285FF]",
  ];

  const handleMouseMove = (e: any) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left;

    target.style.setProperty("--mouse-x", `${x}px`);
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: delay, ease: easeInOut }}
      onMouseMove={handleMouseMove}
      onClick={(e) => setActive(e)}
      className={`${
        position === active
          ? "h-[220px] lg:h-[300px] xl:h-[400px] overflow-hidden"
          : "h-12 lg:h-14  xl:h-20 hover:project"
      } text-white  duration-500  border relative cursor-pointer group border-[#ffffff] border-opacity-[0.125] w-[100%] bg-[#333333] bg-opacity-[0.2] backdrop-blur-xl pl-8 flex items-center space-x-4 rounded-lg xl:rounded-[12px] `}
    >
      {position === active ? (
        <a href={link}>
          <Image src={img} alt="" fill className=" object-cover" />
          <div className=" py-5 md:py-10 z-30 bg-gradient-to-t from-black via-[#000000b6] to-[#00000000] bg-opacity-50 w-[100%] absolute left-0 bottom-0 font-light px-5">
            <p className="text-sm xl:hidden xl:text-base text-justify">
              {textDetail.sm}
            </p>
            <p className="hidden xl:block text-sm xl:text-base text-justify">
              {textDetail.xl}
            </p>
          </div>
        </a>
      ) : (
        <>
          <div
            className={`w-3 h-3 ${
              color[position - 1]
            } rounded-full group-hover:h-4 group-hover:w-4 duration-300`}
          ></div>
          <span className="text-xs xl:text-base md:group-hover:text-sm md:font-semibold xl:group-hover:text-lg duration-300">
            {title}
          </span>
        </>
      )}
    </motion.div>
  );
}

export default ProjectItem;
