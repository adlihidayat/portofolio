import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

type Props = {
  name: string;
  role: String;
  bgColor: String;
  link: string;
};

function TechItem({ name, role, bgColor, link }: Props) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const mouseVariants: Variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
      backgroundColor: "rgb(255, 255, 255)",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");

  const textLeave = () => setCursorVariant("default");

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.a
      href={link}
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`hover:cursor-none w-[90%] md:w-[75%] ${bgColor} flex flex-col md:flex-row md:justify-between md:items-end px-5 xl:px-10 py-3 xl:py-7`}
    >
      <motion.span
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 1.0 }}
        className=" text-5xl lg:text-7xl xl:text-8xl font-bold "
      >
        {name}
      </motion.span>
      <motion.span
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 1.0 }}
        className=" text-[13px] xl:text-lg xl:font-bold"
      >
        {role}
      </motion.span>
      <motion.div
        className="bg-white fixed rounded-full top-0 left-0 pointer-events-none hidden xl:block"
        variants={mouseVariants}
        animate={cursorVariant}
      />
    </motion.a>
  );
}

export default TechItem;
