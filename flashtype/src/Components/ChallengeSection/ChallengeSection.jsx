import React from 'react'
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';


const ChallengeSection = ({ selectedParagaraph, timeRemaining, timeStarted, words, characters, wpm }) => {
    return (
        <div className="challenge-section-container">
            <div data-aos="fade-up" className=" challenge-section-header">
                <h1>Take a Speed test Now!</h1>
                <TestContainer
                    selectedParagaraph={selectedParagaraph}
                    timeRemaining={timeRemaining}
                    timeStarted={timeStarted}
                    words={words}
                    characters={characters}
                    wpm={wpm} />
            </div>

        </div>
    );
}

export default ChallengeSection;