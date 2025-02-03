import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import p1 from '../../assets/1.png'
import p2 from '../../assets/2.png'
import p3 from '../../assets/3.png'
import p4 from '../../assets/4.png'
import p5 from '../../assets/5.png'
import p6 from '../../assets/6.png'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
            {/* <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <a key={index} href={work.link} target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} alt="" />
                        </a>
                    );
                })}
            </div> */}

            {/* <a href="https://github.com/venujaranasinghe" target="_blank" rel="noopener noreferrer">
                <div className="mywork-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </a> */}

            <div className="banner">
                <div className="slider" style={{ "--quantity": 10 }}>
                    <div className="item" style={{ "--position": 1 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p1} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": 2 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p2} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": 3 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p3} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": 4 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p4} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": 5 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p5} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": 6 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p6} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": 7 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p1} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": 8 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p2} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": 9 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p3} alt="" />
                        </a>
                    </div>
                    <div className="item" style={{ "--position": 10 }}>
                        <a href="https://github.com/venujaranasinghe?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={p4} alt="" />
                        </a>
                    </div>
                </div>
            </div>




            <div className="mywork-title">
                <h1>Check out my blogs! </h1>
                <p className="pending">Pending...</p>

            </div>
        </div>

    )
}

export default MyWork