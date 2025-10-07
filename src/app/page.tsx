import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import CustomCursor from '@/components/CustomCursor/CustomCursor'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Portfolio from '@/components/Portfolio/Portfolio'
import Resume from '@/components/Resume/Resume'
import ServiceParent from '@/components/ServiceParent/ServiceParent'
import Skills from '@/components/Skills/Skills'
import React from 'react'

function page() {
  return (
    <>
    <Header/>
    <CustomCursor/>
     <section id="home"><Hero/></section> 
    <section id="about"><About/></section>
    <section id="services"><ServiceParent/></section>
    <section id="skills"><Skills/></section>
    <section id="resume"><Resume/></section>
    <section id="portfolio"><Portfolio/></section>
    <section id="contact"><Contact/></section>
    <Footer/> 
    </>
  )
}

export default page