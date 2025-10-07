'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function HeroImage() {
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: 20, // moves down by 20px
        duration: 1.5,
        repeat: -1, // infinite loop
        yoyo: true, // moves up and down
        ease: 'power1.inOut',
      })
    }
  }, [])

  return (
    <div
      ref={imageRef}
      className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#F2C013] shadow-lg mx-auto md:mx-0"
    >
      <Image
        src="/images/Mypic.jpeg"
        alt="Muhammad Anas"
        fill
        className="object-cover"
      />
    </div>
  )
}

export default HeroImage
