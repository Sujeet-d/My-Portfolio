import { Link } from 'react-router-dom';
import './HeroImg.css';

import React from 'react'

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img src="../../image/home.png" alt="" className="into-img" />
            </div>
            <div className="content">
                <p>Hi, I'M SUJEET D</p>
                <h1>Front-End Developer</h1>
                <div>
                    <Link to="/Projects" className='btn'>PROJECTS</Link>
                    <Link to="/Contact" className='btn btn-light'>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg