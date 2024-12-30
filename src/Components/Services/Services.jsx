import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="div services-title">
                <h1>What I do!</h1>
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return <div key={index} className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <a href={service.link} target="_blank" rel="noopener noreferrer">
                                Read More <img src={arrow_icon} alt="" />
                            </a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services