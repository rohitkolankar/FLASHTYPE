import React from 'react';
import Table from 'react-bootstrap/Table';
import TypingChallenge from './../TypingChallenge/TypingChallenge.jsx'
import './TypingChallengeContainer.css';

const TypingChallengeContainer = () => {
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
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </Table>


            <TypingChallenge />
        </div>
    );
}

export default TypingChallengeContainer;