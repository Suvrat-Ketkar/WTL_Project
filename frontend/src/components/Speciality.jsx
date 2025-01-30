import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

export const Speciality = () => {
  return (
    <div className='flex flex-col items-center gap-4 text-gray-700' id='speciality'>
      <h1 className='text-3xl font-medium py-5 text-gray-700'>Find By Speciality</h1>
      <p className='sm:w-1/3 text-center font-small py-0'>Effortlessly explore top doctors and secure your appointment in just a few clicks!</p>
      
      <div className='flex sm:justify-center gap-7 w-full'>
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)} className='cursor-pointer hover:translate-y-[-15px] transition-all duration-500'key={index} to={`/doctors/${item.speciality}`}>
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality} />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
