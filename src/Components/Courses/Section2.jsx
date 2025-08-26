import React from 'react';
import { motion } from 'framer-motion';
import courseImage from '../../assets/courses.svg';
import upgrade from '../../assets/upgrade.svg';
import instructor from '../../assets/instructor.svg';
import timing_icon from '../../assets/timing_icon.svg';
import Class_icon from '../../assets/Class_icon.svg';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 140, damping: 18, mass: 0.6 },
  },
};

const Section2 = () => {
  const courses = [
    {
      title: 'Learn UI Design with Figma',
      instructor: 'Divya N.',
      duration: '6 hours 12 mins',
      lessons: 15,
      imageUrl: courseImage,
      buttonText: 'Upgrade Path to unlock',
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
  ];

  return (
    <div className="mt-8 px-4 font-outfit">
      <motion.div
        className="grid max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {courses.map((course, index) => {
          const isLocked = course.buttonText === 'Upgrade Path to unlock';
          return (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -4 }}
              className="w-full flex flex-col border border-gray-300 rounded-3xl overflow-hidden bg-white shadow-lg relative"
            >
              {/* Image */}
              <motion.div
                className="relative w-full h-48"
                initial={{ scale: 1.02 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <motion.img
                  src={course.imageUrl}
                  alt={course.title}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                />

                {/* Lock overlay */}
                {isLocked && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-white opacity-50 blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 flex justify-center items-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                    >
                      <img src={upgrade} alt="Upgrade" className="w-16 h-16 opacity-80" />
                    </motion.div>
                  </>
                )}
              </motion.div>

              {/* Body */}
              <div className="flex flex-col flex-grow bg-white p-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg md:text-xl truncate">{course.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2">
                      <img src={timing_icon} className="w-5" alt="duration" />
                      <p className="text-[12px] font-medium text-gray-500">{course.duration}</p>
                    </div>
                    <div className="flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2">
                      <img src={Class_icon} className="w-5" alt="lessons" />
                      <p className="text-[12px] font-medium text-gray-500">{course.lessons} Lessons</p>
                    </div>
                  </div>

                  <motion.div
                    className="flex items-center mt-6 py-3 space-x-2"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                  >
                    <img src={instructor} alt={course.instructor} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-sm text-[#A8A8A8]">Instructor</p>
                      <p className="text-[18px] text-[#000] ">{course.instructor}</p>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl text-sm sm:text-base ${
                    isLocked ? 'bg-[#F4FAFF] text-[#0162D9]' : 'bg-[#0162D9] text-white'
                  }`}
                >
                  {course.buttonText}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* View more CTA */}
      <div className="flex py-10 justify-center mt-6">
        <motion.button
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#0183FF] py-3 flex items-center justify-center hover:scale-105 cursor-pointer px-8 text-[18px] rounded-xl text-white transition duration-300 ease-in-out"
        >
          <span>View more</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Section2;
