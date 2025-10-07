import { AboutHeadingProps } from '@/Utils/type/type';
import React from 'react';

function AboutHeading({ title }: AboutHeadingProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Background blur text */}
      <h1
        aria-hidden="true"
        className="absolute -top-4 sm:-top-6 md:-top-8 text-[48px] sm:text-[64px] md:text-[90px] font-black text-white opacity-5 select-none uppercase pointer-events-none"
      >
        {title}
      </h1>

      {/* Foreground Heading */}
      <h3 className="relative text-yellow-400 text-xl sm:text-2xl font-semibold uppercase text-center p-0">
        {title}
      </h3>

      {/* underline with grey + yellow + grey */}
      <div className="flex items-center justify-center mt-2 sm:mt-3">
        <span className="block w-12 h-[2px] bg-[#3F4551] cursor-text"></span>
        <span className="block w-16 h-[2px] bg-[#F2C014] cursor-text "></span>
        <span className="block w-12 h-[2px] bg-[#3F4551] cursor-text "></span>
      </div>
    </div>
  );
}

export default AboutHeading;
