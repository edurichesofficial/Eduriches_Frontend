import React from 'react'
import section1 from '../assets/Main_image.svg';
import social from '../assets/Social_media_Icon.svg';
import Lock from '../assets/Lock.svg'
import { motion } from "framer-motion";

const Section1 = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto pt-12 bg-[#002B54]">
            <div className="mx-auto flex font-outfit flex-col lg:flex-row items-center px-3  pt-16 lg:pt-32 gap-10">
                {/* Left Side */}
                <div className="text-center flex-1 px-1 lg:text-left">
                    <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-2.5">
                        Turn skills into Success With   <motion.span
                         className="inline-block bg-gradient-to-r from-[#0078FF] to-[#ffffff] bg-clip-text text-transparent text-5xl md:text-5xl lg:text-6xl xl:text-7xl"
                         animate={{ y: [0, 12, 0] }}
                         transition={{
                           duration: 3,
                           repeat: Infinity,
                           repeatType: "loop",
                           ease: "easeInOut"
                         }}
                       >
                         EDULANCER
                    </motion.span>
                    </h1>                   
                    <p className="text-white mb-6 text-[14px] px-5 md:px-0 md:text-lg lg:text-xl">
                        Learn from Experts, grow your digital skills and start earning on your own terms
                    </p>
                    
                   <button className="bg-[#FDDB5D] hover:scale-105 hover:bg-[#FCCC4D] cursor-pointer text-black px-8 py-3 rounded-xl font-semibold transition-transform duration-300 shadow-md mb-4">Start Learning Today</button>


                    <div className=' hidden py-3 lg:flex items-center gap-2'>
                        <img src={Lock} alt='' className='w-6'/> 
                        <p className="text-white text-[14px]">
                         Safe and Secure Platform | Trusted by 1,000+ Learners
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex justify-center">
                    <img 
                        src={section1} 
                        alt="Hero" 
                        className="w-full"
                    />
                </div>
            </div>
           <div className='block pb-10 lg:hidden'>
                   <div className='flex items-center gap-1 justify-center'>
                        <img src={Lock} alt='' className='w-6'/> 
                        <p className="text-white mt-1 text-[12px]">
                         Safe and Secure Platform | Trusted by 1,000+ Learners
                        </p>
                    </div> 
           </div>
        </div>
    )
}

export default Section1
