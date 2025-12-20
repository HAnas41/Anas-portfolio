'use client';

import React, { useEffect, useRef } from 'react';

interface Props {
  speedFactor?: number;
  backgroundColor?: string;
  starColor?: [number, number, number];
  starCount?: number; // optional, agar user set kare
}

export default function StarBackground({
  speedFactor = 0.05,
  backgroundColor = '#080E1D',
  starColor = [255, 255, 255],
  starCount,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const c = canvas.getContext('2d');
    if (!c) return;

    const w = canvas.offsetWidth;
    const  h = canvas.offsetHeight;
    let animationId: number;

    const setCanvasExtents = () => {
      canvas.width = w;
      canvas.height = h;
    };
    setCanvasExtents();

    // 🔹 Default star count based on screen size (if prop not provided)
    const defaultCount = window.innerWidth < 768 ? 1500 : 5000;
    const totalStars = starCount ?? defaultCount;

    const makeStars = (count: number) =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 1600 - 800,
        y: Math.random() * 900 - 450,
        z: Math.random() * 1000,
      }));

    const stars = makeStars(totalStars);

    const clear = () => {
      c.fillStyle = backgroundColor;
      c.fillRect(0, 0, w, h);
    };

    const putPixel = (x: number, y: number, brightness: number) => {
      c.fillStyle = `rgba(${starColor[0]},${starColor[1]},${starColor[2]},${brightness})`;
      c.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance: number) => {
      for (const s of stars) {
        s.z -= distance;
        while (s.z <= 1) s.z += 1000;
      }
    };

    let prevTime = 0;
    const tick = (time: number) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * speedFactor);
      clear();

      const cx = w / 2;
      const cy = h / 2;

      for (const star of stars) {
        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= w || y < 0 || y >= h) continue;

        const d = star.z / 1000.0;
        const b = 1 - d * d;

        putPixel(x, y, b);
      }

      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationId);
  }, [backgroundColor, starColor, speedFactor, starCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // background me rahe
        pointerEvents: 'none',
      }}
    />
  );
}
