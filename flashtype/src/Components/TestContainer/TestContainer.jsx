import React from 'react';
import './TestContainer.css';
import TryAgain from './../TryAgain/TryAgain.jsx';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
const TestContainer = () => {
    const timeRemaining = 60;
    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? (<div className="test-container-header">
                    <TypingChallengeContainer />

                </div>) : (
                    <TryAgain />
                )
            }



        </div>
    );
}

export default TestContainer;
