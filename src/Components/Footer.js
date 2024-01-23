import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

import React from 'react'
// import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            {/* <img src="../../image/foot.png" alt="" /> */}
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "navy", marginRight: "2rem" }} />
                        <div className="footp">
                            <p>No.1, 1st street Vivekanandha Nagar</p>
                            <p>Gummidipundi 601201</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "navy", marginRight: "2rem" }} /> <span style={{ color: "navy" }}>+91 7603847076</span>
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "navy", marginRight: "2rem" }} /> <span style={{ color: "navy" }}>sujeetds90@gmail.com</span>
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4 style={{ color: "maroon", fontWeight:'bold' }}>ABOUT THIS SITE</h4>
                    <p>Welcome to my portfolio! This website serves as a showcase of my work, skills, and passion for Front-End Developer. Dive in to explore my projects and learn more about my journey in Front-End Devs.
</p>
                    <div className="social">
                        <a href="https://www.instagram.com/"> <FaInstagram size={30} style={{ color: "deeppink", marginRight: "1rem", backgroundColor:'whitesmoke', borderRadius:'8px' }} /></a>
                        <a href="https://www.linkedin.com/in/sujeet-d-04ma05/">  <FaLinkedin size={30} style={{ color: "navy", marginRight: "1rem", backgroundColor:'whitesmoke', borderRadius:'3px' }} /></a>
                        <a href="https://github.com/Sujeet-d?tab=repositories"> <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer