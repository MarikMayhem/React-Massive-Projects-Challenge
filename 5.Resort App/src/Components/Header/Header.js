import React, { useState } from 'react';
import { ReactComponent as HeaderLogo } from '../../Assets/images/logo.svg';
import { FaAlignRight, FaRegArrowAltCircleDown } from "react-icons/fa";
import './Header.scss'
import { NavLink } from 'react-router-dom'


const Header = () => {
    const [showMenu, setShowMenu] = useState('')
    return (
        <header>
            <HeaderLogo className="site-logo" />
            <ul className={`nav-menu`} style={showMenu ? { maxHeight: '100px' } : null}>

                <li className="nav-link"><NavLink to="/">Home</NavLink></li>
                <li className="nav-link"><NavLink to="/rooms">Rooms</NavLink></li>

            </ul>
            <FaAlignRight className="nav-icon" onClick={() => setShowMenu(!showMenu)} />
        </header >
    );
}

export default Header;
