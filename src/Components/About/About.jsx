import React from 'react'
import './About.css'
import profile_img from '../../assets/venuja.jpeg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As an undergraduate student of Computer Science at SLIIT, I possess a robust foundation in various programming languages, including C, Python, and Java. Additionally, I have expertise in web development and database management. My proficiency in designing and analyzing algorithms allows me to tackle complex real-world problems effectively.</p>
                        <p>I am passionate about leveraging my technical skills to innovate and develop impactful solutions. My goal is to continuously enhance my knowledge and contribute to the field through creative and effective projects.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skills-tools">
                            <h2 align="center">Skills & Tools</h2>
                            <p align="center">
                                <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                                        alt="c"
                                    />
                                </a>
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                                        alt="css3"
                                    />
                                </a>
                                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                                        alt="html5"
                                    />
                                </a>
                                <a
                                    href="https://www.adobe.com/in/products/illustrator.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
                                        alt="illustrator"
                                    />
                                </a>
                                <a href="https://www.java.com" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                                        alt="java"
                                    />
                                </a>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                        alt="javascript"
                                    />
                                </a>
                                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                                        alt="mongodb"
                                    />
                                </a>
                                <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                                        alt="mysql"
                                    />
                                </a>
                                <a href="https://www.php.net" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                                        alt="php"
                                    />
                                </a>
                                <a href="https://postman.com" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                        alt="postman"
                                    />
                                </a>
                                <a href="https://www.python.org" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                                        alt="python"
                                    />
                                </a>
                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                        alt="react"
                                    />
                                </a>
                                <a href="https://spring.io/" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                                        alt="spring"
                                    />
                                </a>
                                <a href="https://www.tensorflow.org" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
                                        alt="tensorflow"
                                    />
                                </a>
                            </p>
                        </div>
                        <h2>Most used languages:</h2>
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: "40%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{ width: "25%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Java</p><hr style={{ width: "40%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p><hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>-</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>-</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>-</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About