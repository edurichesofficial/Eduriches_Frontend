import React from 'react';
import youtubeIcon from '../assets/youtube.svg';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';

const Footer = () => {
  return (
    <div className="bg-white px-5 lg:px-10 font-outfit text-white py-12">

      <div className="mx-auto px-4 sm:px-16  py-24 bg-[#002B54] text-white rounded-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="text-center sm:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-4xl font-bold whitespace-nowrap">
              EDU LANCER
            </h2>

            <div className="border-t border-gray-500 my-4 inline-block w-1/3 mx-auto"></div>
            <p className="text-base sm:text-lg px-5 md:px-0 md:w-[80%]">
              Empowering you to turn skills into success — EDU LANCER transforms learners into thriving digital freelancers
            </p>
            <div className="mt-6 flex justify-center sm:justify-start space-x-2">

              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </a>
            </div>
          </div>

          <div className="lg:flex lg:space-x-12 lg:col-span-1 sm:text-left space-y-8 sm:space-y-0 flex-col sm:flex-row">
            <div className="space-y-2 flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-base sm:text-lg font-normal hover:text-gray-400">About Us</a></li>
                <li><a href="/contact" className="text-base sm:text-lg font-normal hover:text-gray-400">Contact Us</a></li>
                <li><a href="/faq" className="text-base sm:text-lg font-normal hover:text-gray-400">FAQs</a></li>
              </ul>
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Packages</h3>
              <ul className="space-y-2">
                <li><a href="/basic-package" className="text-base  font-normal sm:text-lg hover:text-gray-400">Basic Package</a></li>
                <li><a href="/standard-package" className="text-base font-normal sm:text-lg hover:text-gray-400">Standard Package</a></li>
                <li><a href="/advanced-package" className="text-base font-normal sm:text-lg hover:text-gray-400">Advanced Package</a></li>
                <li><a href="/premium-package" className="text-base font-normal sm:text-lg hover:text-gray-400">Premium Package</a></li>
                <li><a href="/ultimate-package" className="text-base font-normal sm:text-lg hover:text-gray-400">Ultimate Package</a></li>
              </ul>
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Policy</h3>
              <ul className="space-y-2">
                <li><a href="/disclaimer" className="text-base sm:text-lg font-normal hover:text-gray-400">Disclaimer</a></li>
                <li><a href="/terms" className="text-base sm:text-lg font-normal hover:text-gray-400">Terms and Conditions</a></li>
                <li><a href="/privacy" className="text-base sm:text-lg font-normal hover:text-gray-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-left text-base sm:text-lg mt-12">
          <p>&copy; 2025 EDU LANCER. All Rights Reserved.</p>
          <p>Built with ❤️ by JV INFO TECH</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
