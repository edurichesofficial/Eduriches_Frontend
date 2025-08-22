import React from 'react';

const Section3 = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between gap-8">
        {/* Course Overview */}
        <div className="flex-1 bg-[#003B73] p-8 rounded-2xl text-white">
          <h3 className="text-xl font-bold mb-4">Course Overview</h3>
          <ul className="list-none pl-0 space-y-4">
            <li className="flex items-start text-base">
              <span className="text-teal-400 mr-2">✔</span>
              Gain lifetime access, certification, and a supportive community to help you grow, earn, and thrive with confidence.
            </li>
            <li className="flex items-start text-base">
              <span className="text-teal-400 mr-2">✔</span>
              This isn’t just another course—it’s a complete ecosystem built for individuals who are serious about mastering real digital skills and achieving measurable results.
            </li>
          </ul>
        </div>

        {/* What You'll Learn */}
        <div className="flex-1 bg-[#003B73] p-8 rounded-2xl text-white">
          <h3 className="text-xl font-bold mb-4">What you’ll learn in this course:</h3>
          <ul className="list-none pl-0 space-y-4">
            <li className="flex items-start text-base">
              <span className="text-teal-400 mr-2">✔</span>
              Build a powerful digital presence on Instagram & LinkedIn that attracts opportunities.
            </li>
            <li className="flex items-start text-base">
              <span className="text-teal-400 mr-2">✔</span>
              Discover your niche and craft content that truly sells.
            </li>
            <li className="flex items-start text-base">
              <span className="text-teal-400 mr-2">✔</span>
              Launch your freelancing career with client pitching strategies and location-free earning.
            </li>
            <li className="flex items-start text-base">
              <span className="text-teal-400 mr-2">✔</span>
              Boost your communication & confidence while shaping a strong personal brand.
            </li>
            <li className="flex items-start text-base">
              <span className="text-teal-400 mr-2">✔</span>
              Leverage AI tools for automation, productivity, and smarter content creation.
            </li>
            <li className="flex items-start text-base">
              <span className="text-teal-400 mr-2">✔</span>
              Unlock multiple income streams with proven, practical strategies.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section3;
