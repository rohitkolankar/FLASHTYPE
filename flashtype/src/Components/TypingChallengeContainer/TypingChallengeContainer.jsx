import React from 'react';
import Table from 'react-bootstrap/Table';
import TypingChallenge from './../TypingChallenge/TypingChallenge.jsx'
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ({ timeRemaining, selectedParagaraph, words, characters, wpm }) => {
    return (
        <div className="typing-challenge-container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Words</th>
                        <th>Characters</th>
                        <th>WPM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{words}</td>
                        <td>{characters}</td>
                        <td>{wpm}</td>
                    </tr>
                </tbody>
            </Table>


            <TypingChallenge selectedParagaraph={selectedParagaraph} timeRemaining={timeRemaining} />
        </div>
    );
}

export default TypingChallengeContainer;