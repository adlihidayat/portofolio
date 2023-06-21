import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Grid } from "swiper";

function Tech() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center space-y-7 ">
      <h1 className=" w-[80%] text-3xl lg:text-5xl -mt-10 ml-[20%] sm:ml-0 lg:ml-[5%] font-semibold">
        Tech
      </h1>
      <div className=" w-[80%] flex flex-col items-end space-y-7 md:flex-row md:items-center md:space-x-10 ">
        <Swiper
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper md:w-screen w-[100%] h-[350px]"
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: {
                rows: 1,
              },
            },
            640: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className="">
            <div className="h-[300px] w-[100%]  flex flex-col items-center space-y-3">
              <a
                href="https://nextjs.org/"
                className="h-[250px] w-[250px] bg-[#0F0C31] rounded-xl flex cursor-pointer justify-center items-center group"
              >
                <img
                  src="next.svg"
                  alt=""
                  className="svg-fill w-[80%] group-hover:w-[90%] duration-200 ease-in-out"
                />
              </a>
              <h2 className=" text-lg sm:text-xl">Next Js</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-[300px] w-[100%]  flex flex-col items-center space-y-3">
              <a
                href="https://react.dev/"
                className="h-[250px] w-[250px] bg-[#0F0C31] group cursor-pointer rounded-xl flex justify-center items-center"
              >
                <img
                  src="react.svg"
                  alt=""
                  className="svg-fill group-hover:w-[55%] duration-200 ease-in-out w-[45%]"
                />
              </a>
              <h2 className=" text-lg sm:text-xl">React Js</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-[300px] w-[100%]  flex flex-col items-center space-y-3">
              <a
                href="https://tailwindcss.com/"
                className="h-[250px] w-[250px] bg-[#0F0C31] group cursor-pointer rounded-xl flex justify-center items-center"
              >
                <img
                  src="tailwind.svg"
                  alt=""
                  className="svg-fill group-hover:w-[55%] duration-200 ease-in-out w-[45%]"
                />
              </a>
              <h2 className=" text-lg sm:text-xl">Tailwind</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-[300px] w-[100%]  flex flex-col items-center space-y-3">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                className="h-[250px] w-[250px] bg-[#0F0C31] group cursor-pointer rounded-xl flex justify-center items-center"
              >
                <img
                  src="javascript.svg"
                  alt=""
                  className="svg-fill group-hover:w-[55%] duration-200 ease-in-out w-[45%]"
                />
              </a>
              <h2 className=" text-lg sm:text-xl">JavaScript</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-[300px] w-[100%]  flex flex-col items-center space-y-3">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                className="h-[250px] w-[250px] bg-[#0F0C31] group cursor-pointer rounded-xl flex justify-center items-center"
              >
                <img
                  src="html.svg"
                  alt=""
                  className="svg-fill group-hover:w-[55%] duration-200 ease-in-out w-[45%]"
                />
              </a>
              <h2 className=" text-lg sm:text-xl">HTML</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-[300px] w-[100%]  flex flex-col items-center space-y-3">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                className="h-[250px] w-[250px] bg-[#0F0C31] group cursor-pointer rounded-xl flex justify-center items-center"
              >
                <img
                  src="css.svg"
                  alt=""
                  className="svg-fill group-hover:w-[55%] duration-200 ease-in-out w-[45%]"
                />
              </a>
              <h2 className=" text-lg sm:text-xl">CSS</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Tech;
