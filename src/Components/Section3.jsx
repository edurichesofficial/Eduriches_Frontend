import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TickBlue from "../assets/Tick_2.svg";
import TickPurple from "../assets/Tick_3.svg";
import TickRed from "../assets/Tick_4.svg";
import TickGreen from "../assets/Tick_1.svg";

import Card1 from "../assets/Card1.svg";
import Card2 from "../assets/Card2.svg";
import Card3 from "../assets/Card3.svg";
import Card4 from "../assets/Card4.svg";

const Section3 = () => {
  const packages = [
    {
      icon: Card1,
      title: "Standard Package",
      description: "Ideal for freelancers ready to expand their skills",
      price: "3,999",
      features: [
        "10+ Hours of Content",
        "Basic Project Templates",
        "Community Access",
        "Email Support",
        "3 Practice Projects",
      ],
      iconImage: TickGreen,
      buttonGradient: "linear-gradient(135deg, #10B682 0%, #0D9887 100%)",
    },
    {
      icon: Card2,
      title: "Pro Package",
      description: "Perfect for advanced learners looking to specialize",
      price: "6,999",
      features: [
        "25+ Hours of Content",
        "Premium Project Templates",
        "1-on-1 Mentorship",
        "Priority Support",
        "5 Real-World Projects",
      ],
      iconImage: TickBlue,
      buttonGradient: "linear-gradient(135deg, #3384EC 0%, #108FBD 100%)",
    },
    {
      icon: Card3,
      title: "Growth Package",
      description: "For freelancers scaling their business",
      price: "9,999",
      features: [
        "50+ Hours of Content",
        "Automation Tools",
        "Advanced Challenges",
        "Dedicated Community Group",
        "10 Live Projects",
      ],
      iconImage: TickPurple,
      buttonGradient: "linear-gradient(135deg, #A054F5 0%, #5E49E8 100%)",
    },
    {
      icon: Card4,
      title: "Elite Package",
      description: "Become a top-tier freelancer with premium training",
      price: "14,999",
      features: [
        "100+ Hours of Content",
        "Lifetime Access",
        "Exclusive Webinars",
        "Direct Client Leads",
        "Unlimited Projects",
      ],
      iconImage: TickRed,
      buttonGradient: "linear-gradient(135deg, #F03B63 0%, #DD2975 100%)",
    },
  ];

  return (
    <div className="py-24 max-w-screen-xl mx-auto">
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-['Outfit'] leading-snug bg-gradient-to-r from-[#5E4BDA] to-[#2C71A1] bg-clip-text text-transparent">
          Choose Your Path to Success
        </h2>
        <p className="mt-2 text-[#797979] text-[14px] sm:text-lg font-light max-w-2xl mx-auto">
          Transform your freelancing career with our comprehensive learning
          bundles, designed for every stage of your journey
        </p>
      </div>

      {/* Desktop Cards */}
      <div className="mt-10 hidden sm:grid px-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:px-8 lg:px-5">
        {packages.map((pkg, i) => (
          <Card key={i} {...pkg} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden mt-10 px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination", // target below swiper
            renderBullet: (index, className) => {
              return `<span class="${className} custom-dot"></span>`;
            },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
        >
          {packages.map((pkg, i) => (
            <SwiperSlide key={i}>
              <Card {...pkg} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container (outside Swiper, right below it) */}
        <div className="custom-swiper-pagination mt-4 flex justify-center"></div>
      </div>
    </div>
  );
};

export default Section3;
