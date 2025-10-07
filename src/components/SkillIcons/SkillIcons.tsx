"use client";
import React, { useEffect, useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiNextdotjs, SiCanva, SiPython,
  SiFigma, SiNpm, SiYarn,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { HiCursorClick } from "react-icons/hi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SkillIcons() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!row1Ref.current || !row2Ref.current) return;

    // 🔹 Row 1 animation (re-triggers every scroll in)
    gsap.fromTo(
      row1Ref.current.querySelectorAll(".skill-icon"),
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: row1Ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // 🔹 Row 2 animation (separate trigger)
    gsap.fromTo(
      row2Ref.current.querySelectorAll(".skill-icon"),
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: row2Ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // 🧹 Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // 🔸 Row 1 Icons
  const row1 = [
    { icon: <FaHtml5 className="text-[#E44D26]" />, border: "border-[#E44D26]" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, border: "border-[#1572B6]" },
    { icon: <FaJs className="text-[#F7DF1E]" />, border: "border-[#F7DF1E]" },
    { icon: <FaReact className="text-[#61DAFB]" />, border: "border-[#61DAFB]" },
    { icon: <SiRedux className="text-[#764ABC]" />, border: "border-[#764ABC]" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, border: "border-[#06B6D4]" },
    { icon: <SiNextdotjs className="text-white" />, border: "border-white" },
    { icon: <SiPython className="text-[#3776AB]" />, border: "border-[#3776AB]" },
    { icon: <VscJson className="text-[#007ACC]" />, border: "border-[#007ACC]" },
  ];

  // 🔸 Row 2 Icons
  const row2 = [
    { icon: <SiNpm className="text-[#CB3837]" />, border: "border-[#CB3837]" },
    { icon: <SiYarn className="text-[#2C8EBB]" />, border: "border-[#2C8EBB]" },
    { icon: <SiFigma className="text-[#F24E1E]" />, border: "border-[#F24E1E]" },
    { icon: <HiCursorClick className="text-[#1F9CF0]" />, border: "border-[#1F9CF0]" },
    { icon: <FaGithub className="text-white" />, border: "border-white" },
    { icon: <FaGitAlt className="text-[#F05032]" />, border: "border-[#F05032]" },
    { icon: <SiCanva className="text-[#00C4CC]" />, border: "border-[#00C4CC]" },
  ];

  return (
    <section ref={sectionRef} className="py-16 text-center text-white overflow-hidden">
      {/* 🔹 Row 1 */}
      <div ref={row1Ref} className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-9 mb-6 px-4">
        {row1.map((skill, index) => (
          <div
            key={index}
            className={`skill-icon flex items-center justify-center border-2 ${skill.border}
            rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.6)]
            w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24`}
          >
            <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl">{skill.icon}</span>
          </div>
        ))}
      </div>

      {/* 🔹 Row 2 */}
      <div ref={row2Ref} className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-9 px-4">
        {row2.map((skill, index) => (
          <div
            key={index}
            className={`skill-icon flex items-center justify-center border-2 ${skill.border}
            rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.6)]
            w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24`}
          >
            <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl">{skill.icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillIcons;
