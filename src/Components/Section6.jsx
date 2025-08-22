import React from "react";
import Section60 from "../assets/section60.png";
import Section61 from "../assets/section61.png";
import Section62 from "../assets/section62.png";
import Arrowup from "../assets/Arrowup.svg";

const Section6 = () => {
    return (
        <div className="bg-[#F4FAFF] font-outfit w-full py-16">
            {/* Centered Header */}
            <h2  className="text-4xl md:text-5xl font-semibold text-center py-4   bg-gradient-to-r from-[#5E4BDA] to-[#2C71A1] bg-clip-text text-transparent font-[Outfit] leading-[120%] tracking-normal">
                Edulance Events & Announcements
            </h2>
            {/* Centered Sub-header */}
            <p className="text-center text-[#797979] mb-10 px-4 max-w-2xl mx-auto font-normal text-[18px] md:text-[20px] leading-[130%]">
                Stay informed about the latest happenings, launches, and learning
                opportunities at Edulance
            </p>

            <div className="flex flex-col max-w-screen-2xl mx-auto lg:flex-row justify-center items-stretch gap-6 md:gap-8 px-4 md:px-20">
                {/* Left Side Container */}
                <div className=" w-full bg-white border-2 border-gray-300 flex flex-col rounded-2xl md:rounded-4xl overflow-hidden p-2">
                    <img
                        src={Section60}
                        alt="Left"
                        className="w-full h-auto object-cover block "
                    />

                    {/* Text + Button Responsive Layout */}
                    <div className="flex flex-col md:flex-row  px-2 md:px-6 pb-4 md:py-5 items-start md:items-center justify-between gap-3 mt-3 w-full">
                        <p className="font-semibold text-[16px] md:text-lg lg:text-xl text-left">
                            On Demand on Master Class Mastering Career Growth with Edulancing.
                        </p>
                        <button className="border border-blue-500 cursor-pointer text-blue-500 px-3 md:px-4 py-1 md:py-2 rounded-2xl text-[12px] hover:bg-blue-50 whitespace-nowrap text-sm md:text-base mt-2 md:mt-0">
                            Watch Now
                        </button>
                    </div>

                </div>

                {/* Right Side Container */}
                <div className="w-full flex flex-col gap-6">
                    {/* Top Right Container */}
                   <div className="flex flex-1 gap-3 flex-row bg-white border-2 border-gray-300 rounded-2xl md:rounded-4xl items-start overflow-hidden p-2 h-full">
                    <div className="h-full">
                      <img
                        src={Section61}
                        alt="Top Right"
                        className="w-full h-full block rounded-2xl"
                      />
                    </div>
                    <div className="flex flex-col lg:gap-3 items-start md:ml-4 mt-3 w-full md:w-1/2">
                      <p className="font-semibold text-left max-w-[600px] text-sm md:text-base">
                        On Demand on Master Class Mastering Career Growth with
                        Edulancing.
                      </p>
                     <button className="border border-blue-500 cursor-pointer text-blue-500 px-3 md:px-4 py-1 md:py-2 rounded-2xl text-[12px] hover:bg-blue-50 whitespace-nowrap text-sm md:text-base mt-4 md:mt-0">
                            Watch Now
                        </button>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-row gap-3 bg-white border-2 border-gray-300 rounded-2xl md:rounded-4xl items-start overflow-hidden p-2 h-full">
                    <div className="h-full">
                      <img
                        src={Section62}
                        alt="Top Right"
                        className="w-full h-full block rounded-2xl"
                      />
                    </div>
                    <div className="flex flex-col lg:gap-3 items-start md:ml-4 mt-3 w-full md:w-1/2">
                      <p className="font-semibold text-left max-w-[600px] text-sm md:text-base">
                         On Demand on Master Class Mastering Career Growth with
                                Edulancing.
                      </p>
                      <button className="border border-blue-500 cursor-pointer text-blue-500 px-3 md:px-4 py-1 md:py-2 rounded-2xl text-[12px] hover:bg-blue-50 whitespace-nowrap text-sm md:text-base mt-4 md:mt-0">
                            Watch Now
                        </button>
                    </div>
                  </div>
                </div>
            </div>

            {/* See All Events Button */}
            <div className="flex py-10 justify-center mt-6">
                <button className="bg-[#0183FF] py-3 flex items-center justify-center hover:scale-105 cursor-pointer px-8 text-[18px] rounded-xl text-white transition duration-300 ease-in-out">
                    <span>See all Events</span>
                    <img src={Arrowup} alt="Arrow Up" className="ml-4  " />
                </button>
            </div>

        </div>
    );
};

export default Section6;
