import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import courseImage from '../../assets/courses.svg';
import upgrade from '../../assets/upgrade.svg';
import instructor from '../../assets/instructor.svg';
import timing_icon from '../../assets/timing_icon.svg';
import Class_icon from '../../assets/Class_icon.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Section2 = () => {
    const [isMobile, setIsMobile] = useState(false);

    const courses = [
        {
            title: 'Learn UI Design with Figma',
            instructor: 'Divya N.',
            duration: '6 hours 12 mins',
            lessons: 15,
            imageUrl: courseImage,
            buttonText: 'Watch',
        },
        {
            title: 'Advanced UI Design with Figma',
            instructor: 'John Doe',
            duration: '5 hours 30 mins',
            lessons: 20,
            imageUrl: courseImage,
            buttonText: 'Watch',
        },
        {
            title: 'UI Design for Beginners',
            instructor: 'Jane Smith',
            duration: '3 hours 15 mins',
            lessons: 10,
            imageUrl: courseImage,
            buttonText: 'Watch',
        },
        {
            title: 'UX/UI Fundamentals',
            instructor: 'Chris T.',
            duration: '4 hours 45 mins',
            lessons: 18,
            imageUrl: courseImage,
            buttonText: 'Watch',
        },
        {
            title: 'Mobile App Design Basics',
            instructor: 'Emily R.',
            duration: '4 hours 30 mins',
            lessons: 12,
            imageUrl: courseImage,
            buttonText: 'Watch',
        },
        {
            title: 'Designing with Adobe XD',
            instructor: 'Mark P.',
            duration: '5 hours 0 mins',
            lessons: 14,
            imageUrl: courseImage,
            buttonText: 'Watch',
        },
        {
            title: 'Advanced UX/UI Techniques',
            instructor: 'Olivia H.',
            duration: '6 hours 45 mins',
            lessons: 22,
            imageUrl: courseImage,
            buttonText: 'Watch',
        },
        {
            title: 'UI Prototyping with Sketch',
            instructor: 'Lucas W.',
            duration: '3 hours 50 mins',
            lessons: 18,
            imageUrl: courseImage,
            buttonText: 'Watch',
        },
    ];

    // Set up window resize event listener to detect screen size
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth <= 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkScreenSize(); // Initial check
        window.addEventListener("resize", checkScreenSize); // Listen to resize

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return (
        <div className="mt-12 px-4 font-outfit">
            <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-[#5E4BDA] to-[#2C71A1] text-transparent bg-clip-text">
                Program We Offer
            </h1>
            <p className="text-sm text-center text-[#797979] mb-8">
                Discover the best programs tailored to your journey.
            </p>

            {/* Swiper Section for small screens */}
            {isMobile && (
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop
                    pagination={{
                        clickable: true,
                        el: ".custom-swiper-pagination", // Custom pagination class
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-dot"></span>`;
                        },
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
                                    transition: { duration: 0.3 }
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
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg md:text-xl truncate">
                                            {course.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            <div className="flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2">
                                                <img src={timing_icon} className="w-5" />
                                                <p className="text-[12px] font-medium text-gray-500">
                                                    {course.duration}
                                                </p>
                                            </div>
                                            <div className="flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2">
                                                <img src={Class_icon} className="w-5" />
                                                <p className="text-[12px] font-medium text-gray-500">
                                                    {course.lessons} Lessons
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}


            {isMobile && <div className="custom-swiper-pagination flex justify-center mt-4"></div>}

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
                                transition: { duration: 0.3 }
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
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg md:text-xl truncate">
                                        {course.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2">
                                            <img src={timing_icon} className="w-5" />
                                            <p className="text-[12px] font-medium text-gray-500">
                                                {course.duration}
                                            </p>
                                        </div>
                                        <div className="flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2">
                                            <img src={Class_icon} className="w-5" />
                                            <p className="text-[12px] font-medium text-gray-500">
                                                {course.lessons} Lessons
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            <div className="flex py-10 justify-center mt-6">
                <motion.button
                    className="bg-[#0183FF] py-3 flex items-center justify-center hover:scale-105 cursor-pointer px-8 text-[18px] rounded-xl text-white transition duration-300 ease-in-out hidden md:block"
                    whileHover={{ scale: 1.1, opacity: 0.9 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span>View more</span>
                </motion.button>
            </div>

        </div>
    );
};

export default Section2;
