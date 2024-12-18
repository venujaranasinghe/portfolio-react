import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='Home' className='hero'>
        <img src={profile_img} alt="" />
        <h1>I'm <span>Venuja Ranasinghe</span> ,</h1>
        <p>I'm a second year Computer Science Undergraduate at Sri Lanka Institute of Information Technology with technical skills to innovate and develop impactful solutions</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
        
        <div className="social-links-container">
                <h2>Let's connect!</h2>
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/venuja-ranasinghe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/LinkedIn.svg"
                            alt="LinkedIn"
                        />
                    </a>
                    <a
                        href="https://stackoverflow.com/users/26648053/venuja-ranasinghe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg"
                            alt="Stack Overflow"
                        />
                    </a>
                    <a
                        href="https://web.facebook.com/venuja.ranasinghe.3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
                            alt="Facebook"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/la_venuja/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-icon-png-full-colour.png"
                            alt="Instagram"
                        />
                    </a>
                    <a
                        href="https://github.com/venujaranasinghe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                            alt="GitHub"
                        />
                    </a>
                </div>
                </div>
    </div>
  )
}

export default Hero