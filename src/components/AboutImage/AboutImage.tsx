"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutImage() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imgRef.current,
      {
        scale: 0.85, // 👈 image pehle thodi chhoti hogi
        opacity: 0,  // hidden
      },
      {
        scale: 1,    // 👈 zoom-out effect
        opacity: 1,  // visible
        duration: 1.2,
        delay: 0.2,  // thoda delay taake feel aaye
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%", // jab image viewport ke andar aaye
          toggleActions: "play reverse play reverse", // har baar trigger
        },
      }
    );
  }, []);

  return (
    <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center">
      <Image
        ref={imgRef}
        src="/images/Mypic.jpeg"
        alt="Profile Image"
        width={450}
        height={400}
        className="rounded-xl shadow-lg object-cover w-4/5 sm:w-3/4 md:w-full max-w-[450px] h-auto"
      />
    </div>
  );
}

export default AboutImage;
