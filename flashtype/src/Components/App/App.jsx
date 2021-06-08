import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection.jsx';
import Footer from '../Footer/Footer.jsx';
import Landing from '../Landing/Landing.jsx';
import Nav from './../Nav/Nav.jsx'
class App extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <Landing />
                <ChallengeSection />
                <Footer />
            </div>
        );
    }
}

export default App;