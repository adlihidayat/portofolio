import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { motion, Variants } from "framer-motion";

function Projects() {
  const [view, setView] = useState<Number>(1);
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const textIga = {
    sm: "a website for restaurant. i used nextjs framework. the website is fully responsive",
    xl: "a website for restaurant that will show the promo, menu available, contact. how to order, etc. i used nextjs, tailwind, typescript, etc. the website is fully responsive",
  };

  const textTwitter = {
    sm: "twitter clone with auth, realtime dataBase, etc. i used nextjs firebase, and tailwind",
    xl: "twitter clone with user auth with gmail, dataBase realtime, upload image, gif, and text feature, fully responsive, etc. i used nextjsfirebase, and tailwind",
  };

  const textSalfiyah = {
    sm: "fashion brand web that look elegant and modern. i used nextjs and tailwind",
    xl: "fashion brand web that look elegant and modern. this website is fully responsive, have parallax effect, single page, etc. i used nextjs and tailwind",
  };

  const textGlassmorphism = {
    sm: "desgin website that help designer make glassmorphism simulation. i used ReactJS and tailwind",
    xl: "desgin website that help designer make glassmorphism simulation. after finishing the design, you can copy the css code to the clipboard. i used ReactJS and tailwind",
  };

  return (
    <section
      id="Projects"
      className=" py-20 xl:py-0 w-screen xl:h-[80%] flex flex-col sm:flex-row items-end sm:items-center xl:items-center justify-center space-y-10 sm:space-x-6 md:space-x-20 px-5 xl:pt-40"
    >
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        className=" w-[140px]  2xl:w-[350px] text-white text-5xl md:text-7xl 2xl:text-9xl font-bold text-right"
      >
        PROJ ECT.
      </motion.h1>
      <div className=" flex flex-col items-end space-y-5 w-[100%] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[650px] 2xl:w-[700px]">
        <ProjectItem
          textDetail={textIga}
          link={"https://iga-panggang.vercel.app/"}
          img="/project/iga-panggang.png"
          title={"IGA PANGGANG WAK BUDI"}
          delay={0.7}
          position={1}
          active={view}
          setActive={() => setView(1)}
        />
        <ProjectItem
          textDetail={textTwitter}
          link={"https://twitter-clone-adli.vercel.app/"}
          img="/project/twitter-clone.svg"
          title={"TWITTER CLONE"}
          delay={0.9}
          position={2}
          active={view}
          setActive={() => setView(2)}
        />
        <ProjectItem
          textDetail={textSalfiyah}
          link={"https://adlihidayat.github.io/salfiyah/"}
          img="/project/salfiyah.png"
          title={"SALFIYAH"}
          delay={1.1}
          position={3}
          active={view}
          setActive={() => setView(3)}
        />
        <ProjectItem
          textDetail={textGlassmorphism}
          link={"https://adlihidayat.github.io/glassmorphism/"}
          img="/project/glassmorphism.png"
          title={"GLASSMORPHISM"}
          delay={1.3}
          position={4}
          active={view}
          setActive={() => setView(4)}
        />
      </div>
    </section>
  );
}

export default Projects;
