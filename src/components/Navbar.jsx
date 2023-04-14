import React from 'react';
import Logo from './Logo';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-white shadow-md z-50 flex-row w-full px-7 sm:px-14'>
      <Logo />
      <nav>
        <ul className='flex gap-5 '>
          <li><a href="#home" className='text-lg text-black font-light hover:text-blue-600 hover:border-b-2 border-gray-300  rounded-sm'>Home</a></li>
          <li><a href="#exercises" className='text-lg text-black font-light hover:text-blue-600 hover:border-b-2 border-gray-300 rounded-sm '>Exercises</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar