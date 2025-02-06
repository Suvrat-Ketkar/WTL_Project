import React from 'react';
import { assets } from '../assets/assets';

export const Header = () => {
  return (
    <div className=' h-130 flex flex-col md:flex-row flex-wrap bg-green-200 rounded-lg px-6 md:px-10 lg:px-20'>
      {/* Left Side */}
      <div className='md:w-1/2 flex flex-col justify-center'>
        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Connecting You to Trusted Doctors Anytime, Anywhere
        </p>
        <div className='flex flex-col items-center mt-4'>
          <img
            src={assets.group_profiles}
            alt="Group Profiles"
            className='h-32 w-auto rounded-lg md:h-40' // Smaller size for group_profiles
          />
          <p className='mt-4 text-lg text-center'>
            Book Appointments with Ease – Care is Just a Click Away
          </p>
          <a
            href='' className="mt-4 inline-block px-10 py-4 text-white font-bold bg-blue-600 rounded hover:bg-blue-700"
          >
            Book Appointment
          </a>
        </div>
      </div>
      {/* Right Side */}
      <div className='md:w-1/2 relative'>
        <img
          src={assets.header_img}
          className="header_img w-full mt-5"     // Larger height for header_img
          alt="Header"
        />
      </div>
    </div>
  );
};
