import React from 'react';
import courseImage from '../../assets/courses.svg'; 
import upgrade from '../../assets/upgrade.svg'; 
import instructor from '../../assets/instructor.svg'; 
import timing_icon from '../../assets/timing_icon.svg'
import Class_icon from '../../assets/Class_icon.svg'

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
           
            <div className="grid max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="w-full flex flex-col border border-gray-300 rounded-3xl overflow-hidden bg-white shadow-lg relative"
                    >
                        
                        <div className="relative w-full h-48">
                            <img
                                src={course.imageUrl}
                                alt={course.title}
                                className="object-cover w-full h-full"
                            />

                         
                            {course.buttonText === 'Upgrade Path to unlock' && (
                                <div className="absolute inset-0 bg-white opacity-50 blur-sm"></div>
                            )}

                          
                            {course.buttonText === 'Upgrade Path to unlock' && (
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <img
                                        src={upgrade}
                                        alt="Upgrade"
                                        className="w-16 h-16 opacity-80"
                                    />
                                </div>
                            )}
                        </div>

                       
                        <div className="flex flex-col flex-grow bg-white p-4">
                           <div className='flex-1'>
                             <h3 className="font-semibold text-lg md:text-xl truncate">{course.title}</h3>
                             <div className='flex flex-wrap gap-2'>
                                <div className='flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2'>
                                <img src={timing_icon} className='w-5'/>
                                <p className="text-[12px] font-medium text-gray-500">
                                 {course.duration}
                                </p>
                             </div>
                             <div className='flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2'>
                                <img src={Class_icon} className='w-5'/>
                                <p className="text-[12px] font-medium text-gray-500">
                                 {course.lessons} Lessons
                                </p>
                             </div>
                             </div>
                              
                         
                            <div className="flex items-center mt-6 py-3 space-x-2">
                                <img
                                    src={instructor} 
                                    alt={course.instructor}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                   <p className="text-sm text-[#A8A8A8]">Instructor</p>
                                   <p className="text-[18px] text-[#000] ">{course.instructor}</p>
                                </div>
                                
                            </div>
                           </div>
                            <div className="mt-3">
                                <button
                                    className={`w-full py-3 rounded-xl text-sm sm:text-base ${
                                        course.buttonText === 'Upgrade Path to unlock'
                                            ? 'bg-[#F4FAFF] text-[#0162D9]'
                                            : 'bg-[#0162D9] text-white'
                                    }`}
                                >
                                    {course.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

             <div className="flex py-10 justify-center mt-6">
                            <button className="bg-[#0183FF] py-3 flex items-center justify-center hover:scale-105 cursor-pointer px-8 text-[18px] rounded-xl text-white transition duration-300 ease-in-out">
                                <span>View more</span>
                            </button>
                        </div>
        </div>
    );
};

export default Section2;
