import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import Homeskills from '../Components/Homeskills'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <Homeskills />
            <Footer />
        </div>
    )
}

export default Home