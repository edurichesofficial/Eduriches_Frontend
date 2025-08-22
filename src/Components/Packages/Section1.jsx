import React from 'react';
import line from '../../assets/line.svg';

const Section1 = ({ packageName, price, promoPrice, description, buttonText, image }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-[#002B54] rounded-4xl shadow-xl max-w-6xl mx-auto mt-30 px-4 sm:px-6 lg:px-0 lg:pl-12">
            {/* Left Section: Text Content */}
            <div className="flex-1 text-white mb-8 lg:mb-0">
                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    {packageName}
                </h2>
                <div className="mt-2">
                    <img src={line} alt="line" />
                </div>
                <p className="text-lg mb-4">MRP - ₹{price}</p>
                <p className="text-lg mb-4">With Promocode - ₹{promoPrice}</p>
                <p className="text-base mb-6">{description}</p>
                <button className="bg-[#FDDB5D] text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600">
                    {buttonText}
                </button>
            </div>

            {/* Right Section: Image */}
            <div className="flex-1 mb-8 lg:mb-0">
                <img
                    src={image}
                    alt="Package Books"
                    className="w-full h-auto object-cover rounded-4xl lg:rounded-r-4xl lg:rounded-l-none"
                />
            </div>
        </div>
    );
};

export default Section1;
