import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImgpro from '../Components/HeroImgpro'
import Footer from '../Components/Footer';
import Aboutcontent from '../Components/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgpro heading="ABOUT" text="Crafting seamless, stylish, and responsive interfaces." image="../../image/about.png" />
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default About