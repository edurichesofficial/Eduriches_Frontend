import React from 'react';
import SearchIcon from '../../assets/SearchIcon.svg'

const Section1 = () => {
  return (
    <div className="text-center font-outfit py-16 px-4 bg-[#f5f8fa] mt-[70px]">
      {/* Our Courses Button at the top center */}
      <div className="flex justify-center mb-4">
        <button className="text-[#000000] font-semibold border border-[#919191] px-6 py-2 rounded-full hover:bg-[#6c63ff] hover:text-white transition duration-300 ease-in-out">
          Our Courses
        </button>
      </div>

      <div className="text-center px-4">
        <h2 className="text-[34px] md:text-4xl lg:text-5xl font-semibold font-['Outfit'] leading-snug bg-gradient-to-r from-[#5E4BDA] to-[#2C71A1] bg-clip-text text-transparent">
          Designed by Experts Trusted by Learners
        </h2>
      </div>

      <div className="text-center px-4 mt-4">
        <h2 className="text-[12px] max-w-screen-lg mx-auto sm:text-base md:text-lg font-light text-[#828282]">
          Every course is crafted with care to give you a clear, confident path to success.
          Grow your career with courses that focus on hands-on experience, certifications, and success.
        </h2>
      </div>

      {/* Search Bar */}
    <div className="mt-8 flex justify-center">
  <div className="relative w-full max-w-[550px]">
    <input
      type="text"
      placeholder="Search Support"
      className="p-4 w-full border border-[#70C4FD] rounded-full pl-6 pr-12 focus:outline-none focus:ring-2 text-lg focus:ring-[#6c63ff]"
    />
    <img
      src={SearchIcon}
      alt=""
      className="w-12 h-12 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
    />
  </div>
</div>


      {/* Course Category Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
        <button className="bg-[#0162D9] text-[#FFFFFF] cursor-pointer text-xs px-6 py-3 sm:text-base rounded-full hover:bg-[#6c63ff] hover:text-white transition duration-300 ease-in-out">
          All Courses
        </button>
        <button className="bg-[#f0f0f0] text-[#4f5b6e]  cursor-pointer  text-xs px-6 py-3 sm:py-3 sm:text-base rounded-full hover:bg-[#6c63ff] hover:text-white transition duration-300 ease-in-out">
          Music
        </button>
        <button className="bg-[#f0f0f0] text-[#4f5b6e]  cursor-pointer  text-xs px-6 py-3 sm:py-3 sm:text-base rounded-full hover:bg-[#6c63ff] hover:text-white transition duration-300 ease-in-out">
          Drawing & Painting
        </button>
        <button className="bg-[#f0f0f0] text-[#4f5b6e] cursor-pointer   text-xs px-6 py-3 sm:py-3 sm:text-base rounded-full hover:bg-[#6c63ff] hover:text-white transition duration-300 ease-in-out">
          Marketing
        </button>
        <button className="bg-[#f0f0f0] text-[#4f5b6e]  cursor-pointer  text-xs px-6 py-3 sm:py-3 sm:text-base rounded-full hover:bg-[#6c63ff] hover:text-white transition duration-300 ease-in-out">
          Social Media
        </button>
        <button className="bg-[#f0f0f0] text-[#4f5b6e]  cursor-pointer  hidden md:block text-xs px-6 py-3 sm:py-3 sm:text-base rounded-full hover:bg-[#6c63ff] hover:text-white transition duration-300 ease-in-out">
          Web Development
        </button>
        <button className="bg-[#f0f0f0] text-[#4f5b6e] cursor-pointer  hidden md:block text-xs px-6 py-3 sm:py-3 sm:text-base rounded-full hover:bg-[#6c63ff] hover:text-white transition duration-300 ease-in-out">
          Data Science
        </button>
        <button className=" text-[#005df1]  text-xs cursor-pointer  px-6 py-3 sm:py-3 sm:text-base rounded-full hover:bg-[#6c63ff] hover:text-white transition duration-300 ease-in-out">
          + More
        </button>
      </div>
    </div>
  );
};

export default Section1;
