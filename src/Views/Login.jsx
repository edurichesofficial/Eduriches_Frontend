import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Login_Image from '../assets/Login_Image.jpeg'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('https://eduriches-backend-1.onrender.com/api/v_1/users/login', {
                email,
                password
            });
            const { token, user } = response.data;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify(user));
            window.location.href = '/';
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError('Something went wrong. Please try again.');
            }
        }
        setLoading(false);
    };

    return (
        <div className='flex flex-col-reverse pt-24 lg:flex-row font-outfit gap-10 cursor-default select-none w-full items-center justify-center lg:h-[100dvh]'>
            <div className='h-full flex-1 overflow-hidden'>
                 <img src={Login_Image} alt='' className='w-full h-full object-cover'/>
            </div>
             <div className='h-full flex-1 overflow-scroll hide-scrollbar flex items-center w-full justify-center px-1 md:px-10'>
                    <div className="bg-white rounded-3xl w-full max-w-[600px] md:shadow-xl px-5 md:p-8 flex flex-col justify-center">
                        <div className="flex flex-row justify-between items-start mb-8">
                           <div className="text-left pt-5">
                             <h2 className="text-3xl lg:text-4xl text-gray-900">
                               <span className="block text-gray-500 text-lg font-semibold">Welcome back!</span>
                               <span className="block text-[#0183FF] mt-1 font-bold">Sign in to continue</span>
                             </h2>
                           </div>
                           
                        </div>

                        {error && <div className="text-red-500 mb-4">{error}</div>}

                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 font-medium" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4  py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="text-right mb-6">
                            <a
                                href="/forgot-password"
                                className="text-sm sm:text-base text-[#0077C0] font-normal hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className="w-full cursor-pointer hover:scale-103 bg-gradient-to-r from-[#3384EC] to-[#108FBD] text-white py-4 rounded-xl font-semibold transition-all shadow-md disabled:opacity-50 flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3H4z"
                                        ></path>
                                    </svg>

                                </>
                            ) : (
                                'Login'
                            )}
                        </button>
                        <div className="pt-10 text-center">
                         <div className="relative flex items-center justify-center">
                           <hr className="border-[0.1px] border-[#e4e4e4] w-[70%]" />
                           <span className="absolute bg-white px-3 text-gray-500">or</span>
                         </div>
                       
                         <p className="mt-6 text-base sm:text-lg">
                           Don’t have an account?{' '}
                           <a
                             href="/Register"
                             className="text-[#0183FF] hover:underline font-semibold"
                           >
                             Sign up
                           </a>
                         </p>
                       </div>
                    </div>
          
            </div>
        </div>
    );
};

export default Login;
