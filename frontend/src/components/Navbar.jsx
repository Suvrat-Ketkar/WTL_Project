import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
export const Navbar = () => {
    const navigate=useNavigate();
    const[showMenu,setShowMenu]=useState(false) 
    const[token,setToken]=useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="logo"></img>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='outline-none h-0.5 bg-green w-3/5 m-auto hidden'>
                </hr>
            </NavLink>
            <NavLink  to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='outline-none h-0.5 bg-green w-3/5 m-auto hidden'></hr>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='outline-none h-0.5 bg-green w-3/5 m-auto hidden'></hr>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='outline-none h-0.5 bg-green w-3/5 m-auto hidden'></hr>
            </NavLink>
        </ul>
       
        <div className='flex items-center gap-4'>
        {
  token ? (
    <div className='flex items-center gap-2 cursor-pointer group relative'>
      <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile Pic" />
      <img className='w-2.5' src={assets.dropdown_icon} alt='Dropdown Icon' />
      <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-700 z-20 hidden group-hover:block'>
      <div className="min-w-48 bg-stone-200 rounded flex flex-col gap-4 pad-4">
        <p className="py-1 px-3 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/my-profile')}>My Profile</p>
        <p className="py-1 px-3 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/my-appointments')}>My Appointments</p>
        <p className="py-1 px-3 hover:bg-gray-100 cursor-pointer" onClick={() =>setToken(false)}>
          Logout
        </p>
      </div>
      </div>
    </div>
  ) : (
    <button
      onClick={() => navigate('/login')}
      className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none"
    >
      Create Account
    </button>
  )
}

</div>
    </div>
  )
}
