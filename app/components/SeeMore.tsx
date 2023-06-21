import React from "react";

function seeMore() {
  return (
    <div className=" w-screen h-screen bg-slate-100 fixed top-0 z-50">
      <div className=" w-96 h-40 bg-black opacity-10"></div>
      <div>
        <div className=" bg-slate-400 w-[70%] h-[96px] "></div>
        <div>
          <h1>GLASSMORPHISM (Personal Project)</h1>
          <p>
            web that help you to design glassmophism. you can control the color,
            opacity, and blur. after get the perfect design, you can immediatly
            copy the css code
          </p>
          <button>VISIT SITE</button>
        </div>
      </div>
    </div>
  );
}

export default seeMore;
