import React from 'react';
import Landing from '../Landing/Landing.jsx';
import Nav from './../Nav/Nav.jsx'
class App extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <Landing />
            </div>
        );
    }
}

export default App;