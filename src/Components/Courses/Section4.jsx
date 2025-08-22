import Banner1 from '../../assets/Banner1.svg'; 
import best_Coureses from '../../assets/best_Coureses.svg'; 
import courseImage from '../../assets/courses.svg'; 
import timing_icon from '../../assets/timing_icon.svg'
import Class_icon from '../../assets/Class_icon.svg'

const Section4 = () => {
    const courses = [
        {
            title: 'Learn UI Design with Figma',
            instructor: 'Divya N.',
            duration: '6 hours 12 mins',
            lessons: 15,
            imageUrl: courseImage,
        },
        {
            title: 'Advanced UI Design with Figma',
            instructor: 'John Doe',
            duration: '5 hours 30 mins',
            lessons: 20,
            imageUrl: courseImage,
        },
        {
            title: 'UI Design for Beginners',
            instructor: 'Jane Smith',
            duration: '3 hours 15 mins',
            lessons: 10,
            imageUrl: courseImage,
        }
    ];

    return (
        <div className="bg-white py-12 max-w-screen-xl font-outfit mx-auto px-4 lg:px-20">

 <div className="text-center px-4">
        <h2 className="text-[34px] md:text-4xl lg:text-5xl font-semibold font-['Outfit'] leading-snug bg-gradient-to-r from-[#5E4BDA] to-[#2C71A1] bg-clip-text text-transparent">
          The Best Courses, Tailored to Your Growth
        </h2>
      </div>

      <div className="text-center px-4 mt-4">
        <h2 className="text-[12px] max-w-screen-lg mx-auto sm:text-base md:text-lg font-light text-[#828282]">
          Learn at your pace with expert-led lessons designed for real impact. Whether you're just starting or advancing your skills, we've got you covered.
        </h2>
      </div>
            {/* Course Image */}
            <div className="flex justify-center items-center h-full mt-10 mb-12">
                <img src={Banner1} alt="Banner" className="max-w-full max-h-full hidden md:block  rounded-lg" />
                <img src={best_Coureses} alt="Banner" className="max-w-full max-h-full block md:hidden  rounded-lg" />
            </div>

            {/* Course Cards Section */}
            <div className="mt-8">
                <div className="flex  justify-center space-x-4 flex-wrap ">
                    
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="w-full md:w-72 lg:w-80 mx-auto h-auto flex flex-col border border-gray-300 rounded-3xl  overflow-hidden bg-white shadow-lg relative mb-6"
                        >
                          
                            <div className="relative w-full h-48">
                                <img
                                    src={course.imageUrl}
                                    alt={course.title}
                                    className="object-cover w-full h-full rounded-t-xl"
                                />
                            </div>

                          
                            <div className="flex flex-col flex-grow bg-white p-4">
                                <h3 className="font-semibold text-xl text-gray-900">{course.title}</h3>

                                 <div className='flex flex-wrap pb-6 gap-2'>
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
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="flex py-10 justify-center">
                            <button className="bg-[#0183FF] py-3 flex items-center justify-center hover:scale-105 cursor-pointer px-8 text-[18px] rounded-xl text-white transition duration-300 ease-in-out">
                                <span>View more</span>
                            </button>
                        </div>
            </div>
        </div>
    );
};

export default Section4;
