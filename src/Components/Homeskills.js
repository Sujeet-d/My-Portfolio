import './Homeskill.css'

import React from 'react'

const Homeskills = () => {
    return (
        <div className="body">
            <div className="wrapper">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="container">
                    <h2>My Coding Skills</h2>
                    <div className="skills">
                        <div className="details">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="bar">
                            <div class="inbar" id="html-bar"></div>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="details">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div className="bar">
                            <div class="inbar" id="css-bar"></div>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="details">
                            <span>JavaScript</span>
                            <span>75%</span>
                        </div>
                        <div className="bar">
                            <div class="inbar" id="js-bar"></div>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="details">
                            <span>React Js</span>
                            <span>70%</span>
                        </div>
                        <div className="bar">
                            <div class="inbar" id="react-bar"></div>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="details">
                            <span>jQuery</span>
                            <span>60%</span>
                        </div>
                        <div className="bar">
                            <div class="inbar" id="jquery-bar"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Homeskills