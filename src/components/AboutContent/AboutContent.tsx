"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutContent() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current,
      { scale: 0.85, opacity: 0 }, // 👈 pehle thoda chhota aur hidden
      {
        scale: 1,                  // zoom-out hote hue apni size me aaye
        opacity: 1,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={contentRef}
      className="w-full md:w-1/2 lg:w-6/12 text-white space-y-6"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">
        Hello! I&apos;m Muhammad Anas
      </h1>
      <h2 className="text-lg sm:text-xl text-[#F2C010] font-semibold">
        Front End Developer
      </h2>

      {/* Description */}
      <p className="text-[#9EA2AD] leading-relaxed text-sm sm:text-base">
        I am a Front-End Developer with expertise in building modern, responsive, and scalable web applications.
        I specialize in React.js, Next.js, and Tailwind CSS, with a solid understanding of APIs and front-end best
        practices. I focus on creating clean, efficient, and user-friendly interfaces that enhance the overall
        user experience.
      </p>

      {/* Info Section */}
      <div className="space-y-2 text-[#9EA2AD] text-sm sm:text-base">
        <p className="flex">
          <span className="font-semibold w-24">Email</span>
          <span>:muhammadanaas.334@gmail.com</span>
        </p>
        <p className="flex">
          <span className="font-semibold w-24">From</span>
          <span>:Karachi, Pakistan</span>
        </p>
        <p className="flex">
          <span className="font-semibold w-24">Language</span>
          <span>:English, Urdu, Panjabi</span>
        </p>
      </div>

      {/* Button */}
  <a
  href="https://www.upwork.com/freelancers/~01d4cb4ed8e413255f" // yahan apna link daal do
  className="hire-btn bg-[#F2C010] text-black px-10 sm:px-12 md:px-14 py-3 rounded-full font-medium hover:bg-yellow-500 transition inline-block text-center">
  Hire Me
  </a>

    </div>
  );
}

export default AboutContent;
