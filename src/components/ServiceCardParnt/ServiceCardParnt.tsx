"use client";
import React, { useEffect, useRef } from "react";
import { RiBrainLine } from "react-icons/ri";
import { MdSmartToy } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
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
          icon={<RiBrainLine aria-hidden="true" />}
          title="AI-Powered Web Applications"
          description="I build intelligent web applications powered by AI agents and multi-agent pipelines using Next.js, NestJS, Python FastAPI, and MongoDB."
          extraClass="ml-0 md:ml-23"
        />
      </div>

      {/* Card 2 */}
      <div className="service-card">
        <ServiceCard
          icon={<MdSmartToy aria-hidden="true" />}
          title="AI Agent Development"
          description="I design and develop custom AI agent systems using Claude, Gemini API, and Google Antigravity for real-world automation and intelligent workflows."
          extraClass="ml-0 md:ml-5"
        />
      </div>

      {/* Card 3 */}
      <div className="service-card">
        <ServiceCard
          icon={<BsChatDots aria-hidden="true" />}
          title="Prompt Engineering"
          description="I craft optimized prompts and context engineering strategies for LLMs to maximize AI output quality and consistency."
          extraClass="ml-0 md:mr-20"
        />
      </div>
    </div>
  );
}

export default ServiceCardParent;
