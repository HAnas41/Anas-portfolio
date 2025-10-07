import React from 'react'
import AboutHeading from '../AboutHeading/AboutHeading'
import AboutContentParent from '../AboutContentParent/AboutContentParent'

function About() {
  return (
    <div className='bg-[#0A101E] px-6  pt-20'>
      <AboutHeading title="About Me" />
      <AboutContentParent/>
    </div>
  )
}

export default About
