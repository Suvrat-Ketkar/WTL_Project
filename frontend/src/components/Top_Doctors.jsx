import React, { useContext } from 'react'
import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
export const Top_Doctors = () => {
    const navigate=useNavigate();
    const doctors=useContext(AppContext)
  return (
    <div className='flex items-center flex-col gap-4 my-10 justify-center text-gray-900'>
    <h1 className='text-3xl font-medium text-green-900'>Top Doctors</h1>
    <p className='py-0 text-2xl'>
        Browse through trusted list of Doctors 
    </p>

    {/* Grid Container with 5 columns per row */}
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-3 my-5'>
        {doctors.slice(0, 10).map((item, index) => (
            <div  onClick={()=>navigate(`/appointment/${item._id}`)}
                className='border border-green-500 rounded-xl cursor-pointer overflow-hidden hover:translate-y-[-10px] transition-all duration-500' 
                key={index}
            >
                <img className='bg-green-200 w-full h-40 object-cover' src={item.image} alt={item.name} />
                <div className='flex flex-col items-center p-4'>
                    <p className='text-green-800 font-medium'>Available</p>
                    <p className='font-semibold'>{item.name}</p>
                    <p className='text-gray-700'>{item.speciality}</p>
                </div>
            </div>
        ))}
    </div>

    <button onClick={navigate('/all-doctors')}className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        More
    </button>
</div>
  )
}
