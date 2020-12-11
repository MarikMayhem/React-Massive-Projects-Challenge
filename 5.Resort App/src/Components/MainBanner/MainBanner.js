import React from 'react';
import { Link } from 'react-router-dom'
import './MainBanner.scss'


const MainBanner = ({ heading, description, backgroundImage, linkTo, linkDescription }) => {

    const background = {
        background: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <section style={background} className="hero-banner">
            <div className="hero-backdrop">
                <h1>
                    {heading}
                </h1>
                <hr className="underline" />
                <p className="hero-description">
                    {description}
                </p>
                <Link to={{
                    pathname: linkTo
                }} className="reveal-link"> {linkDescription}</Link>
            </div>
        </section>
    );
}

export default MainBanner;
