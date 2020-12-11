import React from 'react';
import logo from '../../Assets/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">About</a></li>
                <li><a href="#!" className="active">Tours</a></li>
            </ul>
        </header>
    );
}

export default Header;
