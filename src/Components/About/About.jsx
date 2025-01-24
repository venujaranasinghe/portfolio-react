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
                        <p>"As an undergraduate student of Computer Science at SLIIT, I possess a robust foundation in various programming languages, including C, Python, and Java. Additionally, I have expertise in web development, database management, and a strong interest in machine learning, which allows me to explore innovative approaches to solving complex problems. I am particularly drawn to the potential of machine learning in driving data-driven decision-making and developing intelligent systems.</p>
                        <p>My proficiency in designing and analyzing algorithms, combined with my passion for machine learning, enables me to tackle challenging real-world problems effectively. I aim to continuously enhance my skills in this transformative field and contribute to impactful projects that leverage the power of AI and machine learning."</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skills-tools">
                            <h2 align="center">Skills & Tools</h2>
                            <img src="https://skillicons.dev/icons?i=git,cpp,css,discord,postgres,prisma,express,figma,github,html,java,js,mongodb,mysql,nextjs,nodejs,postman,py,react,tailwind,c,illustrator,react,spring,tensorflow,ts,vscode,&perline=14" alt="Skills Icons" />
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
                    <h1>01+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>03+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>01+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About