import React from 'react';
import './TestContainer.css';
import TryAgain from './../TryAgain/TryAgain.jsx';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
const TestContainer = ({ selectedParagaraph, timeRemaining, timeStarted, words, characters, wpm }) => {
    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? (<div className="test-container-header">
                    <TypingChallengeContainer
                        selectedParagaraph={selectedParagaraph}
                        timeRemaining={timeRemaining}
                        words={words}
                        characters={characters}
                        wpm={wpm}

                    />

                </div>) : (
                    <TryAgain />
                )
            }



        </div>
    );
}

export default TestContainer;
