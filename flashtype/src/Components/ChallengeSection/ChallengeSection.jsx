import React from 'react'
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';


const ChallengeSection = () => {
    return (
        <div className="challenge-section-container">
            <div data-aos="fade-up" className=" challenge-section-header">
                <h1>Take a Speed test Now!</h1>
                <TestContainer />
            </div>

        </div>
    );
}

export default ChallengeSection;