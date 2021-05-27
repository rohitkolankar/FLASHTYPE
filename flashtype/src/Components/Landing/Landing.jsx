import React from 'react';
import flash from './../../assets/flash.png'
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type</h1>
                <h1>Faster ?</h1>
                <h1>Quick?</h1>
                <h1>correct ?</h1>
            </div>
            <div className="landing-right">
                <img
                    data-aos="fade-left"
                    className="flash-image"
                    src={flash}
                    alt="flash"
                />
            </div>
        </div>


    );
}

export default Landing;