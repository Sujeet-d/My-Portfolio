import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImgpro from '../Components/HeroImgpro'
import ProjectCard from '../Components/ProjectCard'
import Footer from '../Components/Footer'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImgpro heading="PROJECTS" text="Some Of My Most Recent Works"  image="../../image/project.png"/>
     <ProjectCard />
      <Footer />
    </div>
  )
}

export default Project