import { Link } from 'react-router-dom';
import './Aboutcontent.css';

import React from 'react'

const Aboutcontent = () => {
  return (
      <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>Im a react Front-End Developer. I create responsive secure website for my clients.</p>
            <Link to="/contact">
              <button className='button btn'>CONTACT</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img src="../../image/react1.avif" alt="Img" className='img' />
              </div>
              <div className="img-stack bottom">
                <img src="../../image/react2.webp" alt="Img" className='img' />
              </div>
            </div>
        </div>

      </div>
  )
}

export default Aboutcontent