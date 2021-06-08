import React from 'react';
import './TryAgain.css';
import Button from 'react-bootstrap/Button';

const TryAgain = () => {
    return (
        <div className="TryAgain-container">
            <h1>Do you want to try again?</h1>
            <div className="scores-container">
                <h3>Characters:</h3>
                <h3>Words:</h3>
                <h3>Speed:</h3>
            </div>
            <div className="btn-container">
                <Button variant="success" className="try-again">Try Again</Button>
                <Button onClick={() => { window.open("https://www.facebook.com/sharer/sharer.php?u=rohitkolankar.github.io", "facebook-sharer-dialog") }} variant="primary" className="facebook">Facebook</Button>
                <Button onClick={() => { window.open("https://twitter.com/intent/tweet?text=Hey this is awesomee!!!") }} variant="info" className="twitter">Twitter</Button>

            </div>
        </div>
    );
}

export default TryAgain;