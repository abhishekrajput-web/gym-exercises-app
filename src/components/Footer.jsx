import React from 'react';
import footerLogo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className='bg-black capitalize flex flex-col gap-6 mt-12'>
      <div className="px-7 sm:px-14">
        <div className='grid gap-8 grid-col-mob grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white pt-8'>
          <div className='space-y-4'>
            <h3 className='capitalize text-xl underline text-blue-500 font-semibold'>exercises</h3>
            <p className='text-sm'>3/4 sit up.</p>
            <p className='text-sm'>45 side bend.</p>
            <p className='text-sm'>ankle circles.</p>
            <p className='text-sm'>barbel row</p>
          </div>
          <div className='space-y-4'>
            <h3 className='capitalize text-xl underline text-blue-500 font-semibold'>plans</h3>
            <p className='text-sm'>5 dollor / month.</p>
            <p className='text-sm'>10 dollor / month.</p>
            <p className='text-sm'>15 dollor / month.</p>
            <p className='text-sm'>20 dollor / month.</p>
          </div>
          <div className='space-y-4'>
            <h3 className='capitalize text-xl underline text-blue-500 font-semibold'>about us</h3>
            <p className='text-sm'>Lorem ipsum dolor sit amet..</p>
            <p className='text-sm'>consectetur adipisicing el .</p>
            <p className='text-sm'>ipsum dolor sit Lorem .</p>
            <p className='text-sm'> ipsum dolor Lorem sit.</p>
          </div>
          <div className='space-y-4'>
            <h3 className='capitalize text-xl underline text-blue-500 font-semibold'>more info</h3>
            <p className='text-sm'>reprehenderit in volup.</p>
            <p className='text-sm'>Duis aute irure dolor.</p>
            <p className='text-sm'>Ut enim ad minim veniam.</p>
            <p className='text-sm'>uip ex ea commodo.</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 justify-start sm:justify-center items-start sm:items-center pt-5 text-white'>
      <img src={footerLogo} width={100} height={100} alt="footer-logo" className=' rounded-full' /><span className='text-lg text-white font-normal capitalize text-center'>silver gym</span>
        <p>made with love 💓 by abhishek</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer