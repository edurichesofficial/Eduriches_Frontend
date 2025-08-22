import React from 'react';
import contact from '../assets/contact.svg';

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#002B54] text-white flex items-center justify-center px-4 py-12 mt-17 sm:mt-20 lg:mt-0 cursor-default"  >
            <div className="max-w-6xl w-full grid gap-12 text-white md:grid-cols-2">

                {/* Left Section */}
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-4">
                        <div className="rounded-lg flex ">
                            <img
                                src={contact}
                                alt="Contact Icon"
                                className="w-15 h-15 object-contain"
                            />
                        </div>
                        <div className="leading-tight">
                            <h2 className="text-3xl font-semibold">Get in touch with us</h2>
                        </div>
                    </div>

                    <p className="text-sm text-gray-300 max-w-md">
                        We're here to help! Whether you have a question about our services, need assistance with your account,
                        or want to provide feedback, our team is ready to assist you.
                    </p>

                    <div className="space-y-2">
                        <p className="text-sm text-gray-400">Email:</p>
                        <p className="text-lg font-semibold">hello@Edulancer.com</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm text-gray-400">Phone:</p>
                        <p className="text-lg font-semibold">+1234 567 78</p>
                    </div>

                    <p className="text-xs text-gray-400">Available Monday to Friday, 9 AM - 6 PM GMT</p>
                </div>

                {/* Right Section (Form) */}
                <div className="bg-[#07345D] p-8 rounded-2xl">
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name ..."
                                className="w-full px-4 py-3 rounded-md bg-[#1668B6] text-white placeholder-white focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email ..."
                                className="w-full px-4 py-3 rounded-md bg-[#1668B6] text-white placeholder-white focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Message..."
                                className="w-full px-4 py-3 rounded-md bg-[#1668B6] text-white placeholder-white focus:outline-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="flex items-center space-x-2 bg-white text-[#0A2A43] font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition"
                            >
                                <span>Send Message</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.293 15.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L13.586 9H3a1 1 0 1 0 0 2h10.586l-3.293 3.293a1 1 0 0 0 0 1.414z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
