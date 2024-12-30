import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-logo">
                        <h1>LVR.</h1>
                    </div>
                    <p>Computer Science Undergraduate at SLIIT</p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>© 2025 Venuja Ranasinghe. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer