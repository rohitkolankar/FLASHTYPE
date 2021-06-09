import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TypingChallenge.css';



const TypingChallenge = ({ selectedParagaraph, timeRemaining }) => {

    return (
        <div className="challenge-container">
            <div className="time-remain">
                <h1>00:{timeRemaining}</h1>
                Start typing to start the timer
            </div>
            <div className="container-main">
                <Container>
                    <Row>
                        <Col className="printed-paragraph">{selectedParagaraph}</Col>
                        <Col><textarea className="textarea-container" placeholder="Start typing here..."></textarea></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TypingChallenge;
