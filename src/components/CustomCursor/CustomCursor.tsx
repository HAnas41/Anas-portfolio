"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      // ✨ Dot ko arrow ke tip se aage shift karne ke liye offset
      const offsetX = -5; // right side me thoda aage
      const offsetY = -8; // thoda neeche ya upar (adjust as you like)

      gsap.to(cursor, {
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3.5 h-3.5 bg-[#F4CA20] rounded-full pointer-events-none z-[9999] mix-blend-difference"
    ></div>
  );
};

export default CustomCursor;
