import React from 'react';
import section2 from '../assets/section2.png';

const Section2 = () => {
  return (
    <div className="bg-[#F4FAFF] w-full">
      <div className="max-w-screen-xl font-outfit mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-5 py-10 lg:py-24">
        
        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* About Us Button */}
          <button className="bg-gradient-to-r from-[#5C4CD8] to-[#3D64B5] text-white px-6 py-2 rounded-full font-semibold transition shadow-md mb-6">
            About Us
          </button>
          <h5  className="mb-6  font-outfit font-semibold text-2xl md:text-4xl" >
            We're Not Just a Platform - We're a Revolution in Learning & Earning.
          </h5>

          {/* Description */}
          <p className="text-[#797979] mb-6 text-[14px] md:text-lg leading-relaxed">
            At Edulancing, we empower learners to become doers. Our expertly designed video programs 
            ranging from quick skill boosters to in-depth masterclasses open doors to opportunities 
            in freelancing, digital marketing, automation, and much more. We go beyond courses.
          </p>

          <p className="text-[#797979] md:mb-6 text-[14px] md:text-lg leading-relaxed">
            With real-world toolkits, live challenges, and a thriving learner-creator community, 
            we ensure you don't just learn, you launch your journey.
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={section2} 
            alt="Section 2" 
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
