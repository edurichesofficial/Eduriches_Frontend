import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LeftQuote from "../assets/LeftQuote.svg";

const testimonials = [
  {
    id: 1,
    text: "The courses helped me master digital marketing quickly. The content was practical, and I could apply it immediately to my business.",
    name: "Aarav S.",
    location: "Mumbai",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "I loved how structured and easy-to-follow the lessons were. The support team was always ready to help, making learning stress-free.",
    name: "Divya N.",
    location: "Bangalore",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    text: "I got a really good discount on a premium resort. Booking took just a few steps and the final confirmation came quickly. Highly recommend!",
    name: "Ritika T.",
    location: "Pune",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    text: "Amazing platform! I learned so much and the community was super supportive throughout the journey.",
    name: "Karan P.",
    location: "Delhi",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 5,
    text: "The instructors are highly knowledgeable and engaging. I felt confident applying my skills at work immediately.",
    name: "Sneha R.",
    location: "Hyderabad",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

const Section5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Update itemsPerView based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Duplicate first & last slides for looping
  const extendedTestimonials = [
    ...testimonials.slice(-itemsPerView),
    ...testimonials,
    ...testimonials.slice(0, itemsPerView),
  ];

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= testimonials.length) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(testimonials.length - 1);
    }
    setTimeout(() => setIsTransitioning(true), 50); 
  };

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  useEffect(() => {
    if (isHovered) return; 
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="bg-white py-8 md:py-16 font-outfit px-6 lg:px-20">
      {/* Top Heading */}
      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto justify-between items-center mb-12">
        <div className="w-full">
          <span className="bg-gradient-to-r from-[#5E4BDA] to-[#2C71A1] text-4xl md:text-4xl md:mb-2 bg-clip-text text-transparent font-medium">
            Testimonials
          </span>
          <h2 className="text-xl sm:text-2xl mt-2 lg:text-3xl font-semibold">
            What Our Students Say About Us
          </h2>
        </div>
        <div className="w-full">
           <p className="text-[#6B6A72] mt-2 md:mt-4 lg:mt-0 max-w-sm ml-auto text-text-left lg:text-right">
            Our students’ experiences reflect our commitment to their success.
           </p>
        </div>
       
      </div>

      {/* Slider Container */}
      <div
        className="overflow-hidden relative py-8 md:py-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${
              (currentIndex + itemsPerView) * (100 / itemsPerView)
            }%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedTestimonials.map((t, index) => (
            <div
              key={index}
              className="px-2 md:px-4"
              style={{
                flex: `0 0 ${100 / itemsPerView}%`,
              }}
            >
              <div className="bg-[#F0F7FF] p-6 py-10 min-h-[300px] rounded-2xl shadow-md flex flex-col relative justify-between">
                <div>
                  <img src={LeftQuote} alt="" className="absolute w-12 -top-5" />
                </div>
                <p className="text-gray-700 text-lg mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold  text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.location}</p>
                    <div className="flex text-yellow-400">
                      {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex max-w-screen-xl justify-end mx-auto gap-2 pb-5 md:pb-0 ">
        <button
          onClick={prevSlide}
          className="w-16 h-16 hover:scale-105 flex items-center justify-center cursor-pointer rounded-full bg-[#F0F7FF] text-[#3384EC] hover:bg-[#3384EC] hover:text-white transition"
        >
          <FaArrowLeft size={24}/>

        </button>
        <button
          onClick={nextSlide}
          className="w-16 h-16 hover:scale-105 flex items-center justify-center cursor-pointer rounded-full bg-[#F0F7FF] text-[#3384EC] hover:bg-[#3384EC] hover:text-white transition"
        >
          <FaArrowRight size={24}/>
        </button>
      </div>

    </div>
  );
};

export default Section5;
