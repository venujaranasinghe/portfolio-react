import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <a key={index} href={work.link} target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} alt="" />
                        </a>
                    );
                })}
            </div>

            <a href="https://github.com/venujaranasinghe" target="_blank" rel="noopener noreferrer">
                <div className="mywork-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </a>


            <div className="mywork-title">
                <h1>Check out my blogs! </h1>
                <p className="pending">Pending...</p>

            </div>
        </div>

    )
}

export default MyWork