import React, { useEffect, useState } from "react";

function PageNumber({ position }: any) {
  const [color, setColor] = useState("text-[#F7F7F7]");

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

  return (
    <div
      className={`${color} ease-in-out duration-500 w-screen flex justify-center fixed top-5 sm:-right-[45%] sm:top-10 overflow-x-hidden z-20`}
    >
      <p className=" text-[26px] font-extrabold">0{position}</p>
    </div>
  );
}

export default PageNumber;
