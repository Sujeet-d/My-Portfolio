import { NavLink } from "react-router-dom"
import "./ProjectCard.css"

import React from 'react'

const ProjectCard = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">My-Projects</h1>
            <div className="dis-flex">
                <div className="project-container">
                    <div className="project-card">
                        <img src="../../image/pro1.png" alt="img" />
                        <h2 className="project-title">Online Cafe Shop</h2>
                        <div className="pro-details">
                            <p> Utilized <b> HTML, CSS and JavaScript </b> to create a visually appealing cafe shop website that adapts seamlessly to various devices. Implemented an intuitive user interface with clear navigation, enabling  customers to browse the menu,view cafe ambiance photos, and access contact information easily.</p>
                            <div className="pro-btns">
                                <NavLink to="https://sujeet-d.github.io/Cafe/" target="_blank" className="btn btn2">Demo</NavLink>
                                {/* <NavLink to="https://github.com/Sujeet-d?tab=repositories" target="_blank" className="btn btn2">GitHub Link</NavLink> */}
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="../../image/pro2.png" alt="img" />
                        <h2 className="project-title">Weather Application</h2>
                        <div className="pro-details"> <p>
                            Created a Weather Application using HTML, Bootstrap, and JavaScript. Users can input a city or location, and the app fetches real-time weather data from an API. Display the current temperature, humidity, wind speed, etc. <br />  Bootstrap ensures a responsive and visually appealing design.   </p>
                            <div className="pro-btns">
                                <NavLink to="https://sujeet-d.github.io/Weather-App/" target="_blank" className="btn btn2">Demo</NavLink>
                                {/* <NavLink to="https://github.com/Sujeet-d/Weather-App" target="_blank" className="btn btn2">GitHub Link</NavLink> */}
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="../../image/pro3.png" alt="img" />
                        <h2 className="project-title">To-Do List</h2>
                        <div className="pro-details"> <p> Created a simple to-do list project using HTML, CSS, and JavaScript. Used HTML for structure, CSS for styling, and JavaScript for dynamic functionality. Allow users to add, delete, and Edit task. Enhance user experience with smooth transitions and a clean, intuitive interface</p>
                        <div className="pro-btns1">
                            <NavLink to="https://sujeet-d.github.io/To-Do-List/" target="_blank" className="btn btn2">Demo</NavLink>
                            {/* <NavLink to="https://github.com/Sujeet-d/To-Do-List" target="_blank" className="btn btn2">GitHub Link</NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default ProjectCard