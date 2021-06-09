import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection.jsx';
import Footer from '../Footer/Footer.jsx';
import Landing from '../Landing/Landing.jsx';
import Nav from './../Nav/Nav.jsx';


const TotalTime = 60;
class App extends React.Component {

    state = {

        selectedParagaraph: "I am rohit!",
        timeRemaining: TotalTime,
        timeStarted: false,
        words: 10,
        characters: 0,
        wpm: 0,

    }

    render() {
        return (
            <div>
                <Nav />
                <Landing />
                <ChallengeSection
                    selectedParagaraph={this.state.selectedParagaraph}
                    timeRemaining={this.state.timeRemaining}
                    timeStarted={this.state.timeStarted}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}

                />
                <Footer />
            </div>
        );
    }
}

export default App;