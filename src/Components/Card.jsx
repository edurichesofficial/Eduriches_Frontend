import React from "react";

const Card = ({ icon, title, description, price, features, iconImage, buttonGradient }) => {
  return (
    <div className="relative font-outfit cursor-default bg-white shadow-lg border border-[#e0e0e0] rounded-2xl p-6 flex flex-col w-full h-full">
      {/* Image on top-left */}
      <div className="mb-4">
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold mb-2 text-left">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 text-left">{description}</p>

      {/* Price */}
      <p className="text-2xl font-bold text-gray-900 mb-4 text-left">
        ₹{price} <span className="text-sm text-gray-500">/ lifetime</span>
      </p>

      {/* Features */}
      <ul className="space-y-2 text-gray-700 flex-1 text-left">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <img src={iconImage} alt="tick" className="w-5 h-5 mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Button with gradient */}
      <button
        className="mt-6 text-white px-6 py-2 cursor-pointer rounded-xl font-semibold w-full transition hover:scale-105"
        style={{ background: buttonGradient }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Card;
