"use client";
import { navItems } from "@/Utils/helper/helper";
import React, { useEffect, useState } from "react";

function NavList() {
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "skills", "resume", "portfolio", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "0px 0px -40% 0px", threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 👇 scroll karne wala function
  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-9 text-white">
      {navItems.map((item) => (
        <li key={item.href}>
          <button
            onClick={() => handleScroll(item.href)}
            className={`transition-colors duration-300 ${
              active === item.href ? "text-[#F2C014]" : "text-white"
            }`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
