import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="logo-text">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    FLASHTYPE
                </Navbar.Brand>
            </Navbar>

        </div>
    );
}

export default Nav;