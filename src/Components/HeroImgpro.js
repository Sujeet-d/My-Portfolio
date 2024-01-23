import './HeroImgpro.css'

import React from 'react'

const HeroImgpro = (props) => {
    return (
        <div className="hero">
            <div className="mask">
                <img src={props.image} alt="" className="into-img" />
            </div>
            <div className="content">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default HeroImgpro