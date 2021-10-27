import React from 'react';
import './Event.css';










const Event = () => {
    return (
        <div>

            <div className="card-container">
            <div className="event-card">

                <div className="event-card-img-container">
                <img src="https://image.freepik.com/free-photo/tourists-go-up-hill-sunrise_1150-19692.jpg" alt=""/>
                </div>

                <div className="event-description">
                    <p className='event-title'>Humanity More</p>
                    <p className='date'>29 sep, 2020</p>
                    <div className="cancel-btn">
                        <button>Cancel</button>
                    </div>
                </div>







            </div>
            </div>
            
        </div>
    );
};

export default Event;