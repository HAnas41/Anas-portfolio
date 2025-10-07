"use client";
import React, { useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "../ServiceCard/ServiceCard";

function ServiceCardParent() {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // All direct child divs (each ServiceCard)
    const cards = cardsRef.current?.querySelectorAll(".service-card");

    if (cards) {
      gsap.fromTo(
        cards,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.25, // 👈 Card1 → Card2 → Card3 delay
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardsRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 place-items-center"
    >
      {/* Card 1 */}
      <div className="service-card">
        <ServiceCard
          icon={<FaLaptopCode aria-hidden="true" />}
          title="Custom Websites"
          description="I build dynamic and user-friendly websites that deliver seamless user experiences 
          and visually captivating animations, making each interaction smooth and engaging."
          extraClass="ml-0 md:ml-23"
        />
      </div>

      {/* Card 2 */}
      <div className="service-card">
        <ServiceCard
          icon={<FaCode aria-hidden="true" />}
          title="Web Applications"
          description="I specialize in creating Full Stack Websites using modern technologies like MERN Stack (MongoDB,
          Express.js, React.js, and Node.js) and Next.js – a perfect combination."
          extraClass="ml-0 md:ml-5"
        />
      </div>

      {/* Card 3 */}
      <div className="service-card">
        <ServiceCard
          icon={<FaLinkedin aria-hidden="true" />}
          title="LinkedIn Profile Optimization"
          description="I optimize LinkedIn profiles to highlight your professional strengths, creating a compelling and visually engaging profile that attracts recruiters and clients while boosting your online presence."
          extraClass="ml-0 md:mr-20"
        />
      </div>
    </div>
  );
}

export default ServiceCardParent;
