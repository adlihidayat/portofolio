import React, { useEffect, useState } from "react";
import TechItem from "./techItem";

function Tech() {
  return (
    <section
      id="Tech"
      className=" w-screen flex flex-col items-center space-y-1 pt-40 xl:pt-80 "
    >
      <TechItem
        link={"https://nextjs.org/"}
        name={"NEXT JS"}
        role={"JAVASCRIPT FRAMEWORK"}
        bgColor={"bg-[#FF00E5]"}
      />
      <TechItem
        link={"https://react.dev/"}
        name={"REACT JS"}
        role={"JAVASCRIPT FRAMEWORK"}
        bgColor={"bg-[#42FF55]"}
      />
      <TechItem
        link={"https://tailwindcss.com/"}
        name={"TAILWIND"}
        role={"CSS FRAMEWORK"}
        bgColor={"bg-[#00C2FF]"}
      />
      <TechItem
        link={"https://developer.mozilla.org/en-US/docs/Web/javascript"}
        name={"JAVASCRIPT"}
        role={"PROGRAMMING LANGUAGE"}
        bgColor={"bg-[#FFAD0D]"}
      />
      <TechItem
        link={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
        name={"HTML"}
        role={"MARKUP LANGUAGE"}
        bgColor={"bg-[#FF357E]"}
      />
      <TechItem
        link={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        name={"CSS"}
        role={"STYLING LANGUAGE"}
        bgColor={"bg-[#0085FF]"}
      />
    </section>
  );
}

export default Tech;
