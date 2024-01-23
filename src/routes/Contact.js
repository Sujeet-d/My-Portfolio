import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImgpro from '../Components/HeroImgpro'
import Footer from '../Components/Footer';
import Form from '../Components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgpro heading="CONTACT" text="Lets have a chat"   image="../../image/contact.png" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact