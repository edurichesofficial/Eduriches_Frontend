import React from 'react';
import Banner from '../../assets/Banner.svg';
import Banner_mobile from '../../assets/Banner_mobile.svg';

const Section4 = () => {
  return (
    <div className="flex justify-center max-w-screen-xl px-5 mx-auto items-center lg:mt-16">
      <img
        src={Banner}
        alt="Banner"
        className="w-full h-auto max-w-screen-xl hidden md:block object-contain  cursor-pointer
             transition-transform duration-300 ease-in-out hover:scale-105"
      />

      <img src={Banner_mobile} alt="Banner" className="w-full h-auto max-w-screen-xl md:hidden object-contain cursor-pointer
             transition-transform duration-300 ease-in-out hover:scale-105" />

    </div>
  );
};

export default Section4;
