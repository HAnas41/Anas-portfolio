"use client";
import React, { useEffect, useRef } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const education = [
  {
    title: "Bachelor of Computer Science",
    duration: "2023 - Present",
    place: "Virtual University",
  },
  {
    title: "FSc Pre Engineering",
    duration: "2020 - 2022",
    place: "Punjab College",
  },
  {
    title: "Agentic AI",
    duration: "2025 - Continue",
    place: "GIAIC",
  },
];

const experience = [
  {
    title: "Top 50 — Phase 1 Winner",
    duration: "2026",
    place: "Google AISeekho Hackathon",
    description:
      "Built Scholio — an AI-powered scholarship matching platform for Pakistan. Students enter academic profile and AI matches best scholarships with reasoning. Ranked Top 50 out of 10,000+ participants. Received official Google Gold Swag.",
  },
  {
    title: "Regional Finalist — Phase 2",
    duration: "2026",
    place: "Google AISeekho Hackathon",
    description:
      "Built Talash — Pakistan's first AI-powered legal navigator with 8 AI agents. Ranked Top 3 in first round out of 630+ submissions. Advanced to Regional Finals out of 605+ teams nationwide.",
  },
];

const ResumeContent: React.FC = () => {
  const eduRef = useRef<HTMLDivElement | null>(null);
  const expRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 🔹 Education content animation
    if (eduRef.current) {
      gsap.fromTo(
        eduRef.current.querySelectorAll(".edu-item"),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eduRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // 🔹 Experience content animation
    if (expRef.current) {
      gsap.fromTo(
        expRef.current.querySelectorAll(".exp-item"),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: expRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="py-16 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div ref={eduRef} className="relative">
            <h1 className="flex items-center text-3xl font-extrabold mb-10">
              <FaGraduationCap className="text-yellow-400 mr-3" /> Education
            </h1>

            {/* Static Line */}
            <div className="absolute left-[10px] top-22 bottom-18 w-[1px] bg-[#4A5261]"></div>

            {education.map((item, idx) => (
              <div key={idx} className="edu-item relative pl-8 mb-17">
                {/* Dot */}
                <div className="absolute left-1 top-1 w-3 h-3 bg-[#101624] rounded-full border border-[#4A5261]"></div>

                {/* Content */}
                <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                  {item.title}
                </h2>
                <p className="text-base text-gray-400 mb-2">{item.duration}</p>
                <p className="text-lg text-white">{item.place}</p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div ref={expRef} className="relative">
            <h1 className="flex items-center text-3xl font-extrabold mb-10">
              <FaBriefcase className="text-yellow-400 mr-3" /> Experience
            </h1>

            {/* Static Line */}
            <div className="absolute left-2 top-22 bottom-18 w-[1px] bg-[#3C434E]"></div>

            {experience.map((item, idx) => (
              <div key={idx} className="exp-item relative pl-8 mb-14">
                {/* Dot */}
                <div className="absolute right-[517px]
                 top-1 w-3 h-3 bg-[#101624] rounded-full border border-[#4A5261]"></div>

                {/* Content */}
                <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                  {item.title}
                </h2>
                <p className="text-base text-gray-400 mb-2">{item.duration}</p>
                <p className="text-lg text-white">{item.place}</p>
                {item.description && (
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeContent;
