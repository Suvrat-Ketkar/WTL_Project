import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
export const Banner = () => {
    const naviagte=useNavigate();
    return (
      <div className="flex flex-col lg:flex-row items-center bg-blue-300 rounded-lg px-6 sm:px-10 md:px-14 lg:px-16  my-20 relative">
        
        {/* Left Side - Text & Button */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-900">
            <p>Book Appointment</p>
            <p className="mt-4 sm:mt-6">With 100+ Trusted Doctors</p>
          </div>
          <button onClick={()=>{naviagte('/login'),scrollTo(0,0)}} className="bg-white text-blue-600 text-sm sm:text-base font-medium px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            Create Account
          </button>
        </div>
  
        {/* Right Side - Image (Slightly Above the Box) */}
        <div className="hidden md:block md:w-1/2 lg:w-[370px]">
          <img className="w-full max-w-md object-contain -mt-10 md:-mt-14 lg:-mt-16" src={assets.appointment_img} alt="appointment" />
        </div>
      </div>
    );
  };
  