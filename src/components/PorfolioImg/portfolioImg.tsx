"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  { img: "/images/warista.png", bg: "bg-[#5CB8DF]", title: "Warista App", link: "https://finalthon.vercel.app/" },
  { img: "/images/movie.png", bg: "bg-[#961B1A]", title: "Movie App", link: "https://movie-web-mu-teal.vercel.app/" },
  { img: "/images/coffee.png", bg: "bg-[#DDC894]", title: "Coffee Shop", link: "https://coffee-heaven-tau.vercel.app/" },
  { img: "/images/bindle.png", bg: "bg-[#E96768]", title: "Bindle UI", link: "https://internship-project-pi-steel.vercel.app/" },
  { img: "/images/fruit.png", bg: "bg-[#8CFC90]", title: "Fruit Market", link: "https://fruit-web.vercel.app/" },
  { img: "/images/food.png", bg: "bg-[#A2F3AD]", title: "Food Delivery", link: "https://foodi-hazel.vercel.app/" },
];

function PortfolioImg() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // jab section screen me aaye
        toggleActions: "play none none reverse",
      },
      defaults: {
        duration: 1,
        ease: "power2.out", // consistent smooth easing
      },
    });

    // 🔹 Row 1 animation — top 3 cards ek sath smooth upar aayein
    if (row1Ref.current) {
      tl.fromTo(
        row1Ref.current.querySelectorAll(".project-card"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        0 // timeline ke start par
      );
    }

    // 🔹 Row 2 animation — thoda delay se, same speed
    if (row2Ref.current) {
      tl.fromTo(
        row2Ref.current.querySelectorAll(".project-card"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        "+=0.4" // 0.4s delay after row1
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 bg-[#0A101E] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* 🔹 Row 1 */}
        <div ref={row1Ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className={`project-card relative overflow-hidden rounded-xl border border-[#0A101E]
                drop-shadow-[0_4px_12px_rgba(10,16,30,0.8)]
                hover:drop-shadow-[0_6px_16px_rgba(10,16,30,1)]
                hover:scale-105 transition-all duration-300 ${project.bg}
                h-60 flex items-center justify-center`}
            >
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={300}
                className="object-contain max-h-full"
              />
              <div
                className="absolute inset-0 bg-black/40 flex items-center justify-center 
                opacity-0 hover:opacity-100 transition"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-16 h-16 rounded-full border-2 border-black 
                             flex items-center justify-center 
                             transition-colors duration-300 hover:border-[#F4CA20]"
                >
                  <FaLink className="text-black text-2xl transition-colors duration-300 
                                    group-hover:text-[#F4CA20]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Row 2 */}
        <div ref={row2Ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(3, 6).map((project, index) => (
            <div
              key={index}
              className={`project-card relative overflow-hidden rounded-xl border border-[#0A101E]
                drop-shadow-[0_4px_12px_rgba(10,16,30,0.8)]
                hover:drop-shadow-[0_6px_16px_rgba(10,16,30,1)]
                hover:scale-105 transition-all duration-300 ${project.bg}
                h-60 flex items-center justify-center`}
            >
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={300}
                className="object-contain max-h-full"
              />
              <div
                className="absolute inset-0 bg-black/40 flex items-center justify-center 
                opacity-0 hover:opacity-100 transition"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-16 h-16 rounded-full border-2 border-black 
                             flex items-center justify-center 
                             transition-colors duration-300 hover:border-[#F4CA20]"
                >
                  <FaLink className="text-black text-2xl transition-colors duration-300 
                                    group-hover:text-[#F4CA20]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioImg;
