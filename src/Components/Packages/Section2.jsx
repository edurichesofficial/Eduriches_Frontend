import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import timing_icon from "../../assets/timing_icon.svg";
import Class_icon from "../../assets/Class_icon.svg";


const Section2 = ({ courses = [] }) => {
  const [isMobile, setIsMobile] = useState(false);


  // Screen size checker
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="mt-12 px-4 font-outfit">
      <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-[#5E4BDA] to-[#2C71A1] text-transparent bg-clip-text">
         Foundations for Future Learning
      </h1>
      <p className="text-sm text-center text-[#797979] mb-8">
        ✨ Start small, dream big — the skills you master here open doors to every advanced path ahead.
      </p>

      {/* Swiper Section for mobile */}
      {isMobile && (
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            renderBullet: (index, className) =>
              `<span class="${className} custom-dot"></span>`,
          }}
          className="max-w-screen-xl mx-auto"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="w-full flex flex-col border border-gray-300 rounded-3xl overflow-hidden bg-white shadow-lg relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full h-48">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex flex-col flex-grow bg-white p-4">
                  <h3 className="font-semibold text-lg md:text-xl truncate">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{course.tutor}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <div className="flex items-center px-2 py-1.5 rounded-full border border-[#D7D7D7] w-fit gap-2">
                      <img src={timing_icon} className="w-5" />
                      <p className="text-[12px] font-medium text-gray-500">
                        {course.hours}
                      </p>
                    </div>
                    <div className="flex items-center px-2 py-1.5 rounded-full border border-[#D7D7D7] w-fit gap-2">
                      <img src={Class_icon} className="w-5" />
                      <p className="text-[12px] font-medium text-gray-500">
                        {course.modules}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {isMobile && (
        <div className="custom-swiper-pagination flex justify-center mt-4"></div>
      )}

      {/* Grid view for desktop */}
      {!isMobile && (
        <div className="hidden lg:grid lg:max-w-screen-xl lg:mx-auto lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="w-full flex flex-col border border-gray-300 rounded-3xl overflow-hidden bg-white shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative w-full h-48">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col flex-grow bg-white p-4">
                <h3 className="font-semibold text-lg md:text-xl truncate">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{course.tutor}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="flex items-center px-2 py-1.5 rounded-full border border-[#D7D7D7] w-fit gap-2">
                    <img src={timing_icon} className="w-5" />
                    <p className="text-[12px] font-medium text-gray-500">
                      {course.hours}
                    </p>
                  </div>
                  <div className="flex items-center px-2 py-1.5 rounded-full border border-[#D7D7D7] w-fit gap-2">
                    <img src={Class_icon} className="w-5" />
                    <p className="text-[12px] font-medium text-gray-500">
                      {course.modules}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Section2;
