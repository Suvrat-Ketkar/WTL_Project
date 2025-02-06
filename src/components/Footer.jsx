import React from 'react'

export const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10'>
        <div>
            {/*Left Section */}
            <p className='text-gray-700'>we are dedicated to providing seamless healthcare solutions with online doctor consultations, video calling with international specialists, and an easy-to-use appointment booking system. </p>
        </div>
        <div className='text-gray-700'>
            {/*Center Section */}
            <p></p>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            {/*Right Section */}
            <p className='text-xl font-medium text-gray-600 '>Get in Touch</p>
            <ul className='text-gray-700'>
                <li>+91 9975932043</li>
                <li>bookwise30@gmail.com</li>
            </ul>
        </div>
        </div>
        <div>
            <p className='text-center font-medium text-gray-500'>Copyright 2025@MediPlotBook-All rights reserved</p>
        </div>
    </div>
  )
}
