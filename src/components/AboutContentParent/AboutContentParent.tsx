import React from 'react'
import AboutImage from '../AboutImage/AboutImage'
import AboutContent from '../AboutContent/AboutContent'

function AboutContentParent() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16
     bg-[#0A101E]">
      {/* Left Side - Image */}
      <AboutImage />

      {/* Right Side - Content */}
      <AboutContent />
    </section>
  )
}

export default AboutContentParent