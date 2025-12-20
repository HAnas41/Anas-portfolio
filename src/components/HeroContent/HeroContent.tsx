'use client'
import React from 'react'
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

function HeroContent() {
  return (
    <div className='text-white pt-4 md:pt-8 text-center md:text-left'>
      {/* Hello text */}
      <h2 className='text-2xl md:text-4xl text-[#F2C010] font-medium'>Hello, I&apos;m</h2>

      {/* Name */}
      <h1 className='font-extrabold text-4xl [@media(min-width:500px)_and_(max-width:767px)]:text-5xl [@media(min-width:768px)_and_(max-width:1000px)]:text-6xl  [@media(min-width:1001px)]:text-7xl '>
        Muhammad
      </h1>
      <h1 className='font-extrabold text-4xl [@media(min-width:500px)_and_(max-width:767px)]:text-5xl [@media(min-width:768px)_and_(max-width:1000px)]:text-6xl  [@media(min-width:1001px)]:text-7xl'>
        Anas
      </h1>

      {/* Typewriter text */}
      <p className='text-[23px] md:text-[30px] lg:text-[34px] mt-2'>
        <Typewriter
          words={['NextJs Developer', 'Software Engineer']}
          loop={true}
          cursor
          cursorStyle="|"
          cursorBlinking={false}
          typeSpeed={200}
          deleteSpeed={200}
          delaySpeed={1500}
        />
      </p>

      {/* Buttons + Social icons */}
      <div className='flex flex-col md:flex-row items-center md:items-start gap-6 mt-5'>
        {/* Hire Me button */}
  <a
  href="https://www.upwork.com/freelancers/~01d4cb4ed8e413255f" // yahan apna link daal do
  className="hire-btn bg-[#F2C010] text-black px-10 sm:px-12 md:px-14 py-3 rounded-full font-medium hover:bg-yellow-500 transition inline-block text-center">
  Hire Me
  </a>


        {/* Social Icons */}
        <div className='flex gap-5'>
          <a href="https://www.linkedin.com/in/anas41/" className='bg-[#3663EB] w-11 h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full flex items-center justify-center hover:bg-[#084182] transition'>
            <FaLinkedin className='text-white text-lg md:text-xl lg:text-2xl' />
          </a>
          <a href="https://wa.me/923340063082" className='bg-[#5FC65F] w-11 h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full flex items-center justify-center hover:bg-[#128C7E] transition'>
            <FaWhatsapp className='text-white text-lg md:text-xl lg:text-2xl' />
          </a>
          <a href="https://www.instagram.com/anasanas56/" className='bg-[#D442AE] w-11 h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full flex items-center justify-center hover:bg-[#9B174F] transition'>
            <FaInstagram className='text-white text-lg md:text-xl lg:text-2xl' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
