"use client";
import React, { useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Talash — AI Legal Navigator",
    url: "https://talash-web.vercel.app/",
    description:
      "Pakistan's first AI-powered legal navigator. Google AISeekho 2026 Regional Finalist.",
    badge: "Google AISeekho Finalist",
  },
  {
    title: "Scholio — AI Scholarship Finder",
    url: "https://scholio-776553617437.asia-south1.run.app/",
    description:
      "AI-powered scholarship matching platform. Top 50 out of 10,000+ participants.",
    badge: "Google AISeekho Top 50",
  },
  {
    title: "Warista — E-Commerce Platform",
    url: "https://finalthon.vercel.app/",
    description: "Full stack e-commerce platform with modern UI.",
  },
  {
    title: "Office Inventory Management",
    url: "https://office-inventory-silk.vercel.app/",
    description: "Complete inventory management system for offices.",
  },
];

function PortfolioImg() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.querySelectorAll(".project-card"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 bg-[#0A101E] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card relative group overflow-hidden rounded-xl
                border border-[#1A2035] bg-[#0F1629]
                hover:scale-[1.03] transition-all duration-300
                hover:border-[#F4CA20]/30
                drop-shadow-[0_4px_12px_rgba(10,16,30,0.8)]
                hover:drop-shadow-[0_8px_24px_rgba(244,202,32,0.15)]"
            >
              {/* Badge */}
              {project.badge && (
                <div className="absolute top-3 right-3 z-10 bg-[#F4CA20] text-[#0A101E]
                  text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {project.badge}
                </div>
              )}

              {/* Iframe Preview */}
              <div className="relative w-full h-[200px] overflow-hidden border-b border-[#1A2035]">
                <iframe
                  src={project.url}
                  title={project.title}
                  className="w-[200%] h-[400px] origin-top-left scale-50 pointer-events-none"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
                {/* Overlay to visit site */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/40
                    flex items-center justify-center opacity-0 group-hover:opacity-100
                    transition-all duration-300 cursor-pointer"
                >
                  <span className="flex items-center gap-2 bg-[#F4CA20] text-[#0A101E]
                    font-semibold text-sm px-4 py-2 rounded-full shadow-lg
                    transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <FaExternalLinkAlt className="text-xs" />
                    Visit Live Site
                  </span>
                </a>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F4CA20] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioImg;
