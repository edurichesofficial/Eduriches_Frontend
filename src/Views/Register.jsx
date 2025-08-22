import { useState, useRef, useEffect } from 'react';
import axios from 'axios'; 
import Sign_up_Image from '../assets/Sign_up_Image.jpeg'

const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir',
    'Ladakh', 'Puducherry'
];

const CustomDropdown = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="w-full px-4 py-3.5 border text-left cursor-pointer border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]"
        onClick={() => setOpen(!open)}
      >
        {value || 'Select state'}
      </button>

      {open && (
        <ul className="absolute top-full mt-1 z-10 w-full max-h-40 overflow-y-auto bg-white rounded-xl shadow-lg">
          {indianStates.map((state) => (
            <li
              key={state}
              className={`px-4 py-2 cursor-pointer hover:bg-[#cce0f5] ${value === state ? 'bg-[#cce0f5] font-semibold' : ''}`}
              onClick={() => {
                setValue(state);
                setOpen(false);
              }}
            >
              {state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Register = () => {
    const [step, setStep] = useState(1);
    const [selectedState, setSelectedState] = useState('');
    const [loading, setLoading] = useState(false);

    // Form values
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        age: '',
        gender: '',
        country: 'India',
        state: '',
        referred_by: '',
        email: '',
        password: ''
    });

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const handleSignup = async () => {
        // Update state in formData
        const payload = { ...formData, state: selectedState };
        setLoading(true);

        try {
            const response = await axios.post('https://eduriches-backend-1.onrender.com/api/v_1/users/register', payload);
            alert(`Signup successful! User ID: ${response.data.id}`);
            setFormData("")
        } catch (error) {
            if (error.response) {
                alert(error.response.data.error);
            } else {
                alert('Something went wrong!');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
                <div className='flex flex-col-reverse pt-24 lg:flex-row font-outfit gap-10 cursor-default select-none w-full items-center justify-center lg:h-[100dvh]'>
                    <div className='h-full flex-1 overflow-hidden'>
                         <img src={Sign_up_Image} alt='' className='w-full h-full object-cover'/>
                    </div>
                     <div className='h-full flex-1 flex items-center w-full overflow-scroll hide-scrollbar justify-center px-1 md:px-10'>
                        <div className="bg-white rounded-3xl w-full max-w-[600px] md:shadow-xl px-5 md:p-8 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-8">
                               <div className="text-left pt-5">
                                 <h2 className="text-3xl lg:text-4xl text-gray-900">
                                   <span className="block text-gray-500 text-lg font-semibold">Join the community!</span>
                                   <span className="block text-[#0183FF] mt-1 font-bold">Create your account</span>
                                 </h2>
                               </div>         
                            </div>

                {/* Step 1: Personal Info + Age/Gender */}
                {step === 1 && (
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 font-medium" htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" value={formData.first_name} onChange={handleChange}
                                placeholder="Enter first name"
                                 className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 font-medium" htmlFor="last_name">Second Name</label>
                            <input type="text" id="last_name" value={formData.last_name} onChange={handleChange}
                                placeholder="Enter second name"
                                 className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">Contact Number</label>
                            <input type="tel" id="phone" value={formData.phone} onChange={handleChange}
                                placeholder="Enter contact number"
                                 className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]" />
                        </div>

                        <div className="mb-8 grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium" htmlFor="age">Age</label>
                                <input type="number" id="age" value={formData.age} onChange={handleChange}
                                    placeholder="Enter your age"
                                     className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]" min="1" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium" htmlFor="gender">Gender</label>
                                <select id="gender" value={formData.gender} onChange={handleChange}
                                     className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] appearance-none focus:border-[#0183FF]">
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <button onClick={handleNext}
                           className="w-full cursor-pointer hover:scale-103 bg-gradient-to-r from-[#3384EC] to-[#108FBD] text-white py-4 rounded-xl font-semibold transition-all shadow-md disabled:opacity-50 flex items-center justify-center">
                            Next
                        </button>

                        <div className="pt-7 text-center">
                         <div className="relative flex items-center justify-center">
                           <hr className="border-[0.1px] border-[#e4e4e4] w-[70%]" />
                           <span className="absolute bg-white px-3 text-gray-500">or</span>
                         </div>
                       
                         <p className="mt-6 text-base sm:text-lg">
                           Do you have an account?{' '}
                           <a
                             href="/Login"
                             className="text-[#0183FF] hover:underline font-semibold"
                           >
                             Sign in
                           </a>
                         </p>
                       </div>
                    </div>
                )}

                {/* Step 2: State/Country + Reference Code + Email/Password */}
                {step === 2 && (
                    <div>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium" htmlFor="state">State</label>
                                <CustomDropdown value={selectedState} setValue={setSelectedState} />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium" htmlFor="country">Country</label>
                                <input disabled type="text" id="country" value="India" readOnly
                                    className="w-full px-4 py-3.5 border cursor-not-allowed border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]" />
                            </div>
                        </div>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div >
                               <label className="block text-gray-700 mb-2 font-medium" htmlFor="referred_by">Reference Code</label>
                               <input type="text" id="referred_by" value={formData.referred_by} onChange={handleChange}
                                   placeholder="Enter reference code"
                                 className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]" />
                            </div>
                            <div >
                               <label className="block text-gray-700 mb-2 font-medium" htmlFor="referred_by">Promo Code</label>
                               <input type="text" id="referred_by" value={formData.referred_by} onChange={handleChange}
                                   placeholder="Enter Promo code"
                                 className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]" />
                            </div>
                        </div>

                        

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange}
                                placeholder="Enter your email"
                                 className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2 font-medium" htmlFor="password">Password</label>
                            <input type="password" id="password" value={formData.password} onChange={handleChange}
                                placeholder="Enter your password"
                                 className="w-full px-4 py-3.5 border border-[#b6b6b6] rounded-xl focus:outline-none focus:ring-[#0183FF] focus:border-[#0183FF]" />
                        </div>

                        <button
                            onClick={handleSignup}
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
                                'Signup'
                            )}
                        </button>


                        <button onClick={handleBack}
                            className="mt-3 w-full py-3 cursor-pointer text-[#0077C0] font-semibold underline hover:text-[#005FA3] transition">
                            Back
                        </button>
                    </div>
                )}

                        </div>
                        
                    </div>
                </div>
    );
};

export default Register;
