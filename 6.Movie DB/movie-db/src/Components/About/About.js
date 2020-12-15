import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import './About.scss'

const About = () => {
    return (
        <React.Fragment>
            <section className="about-me">
                <div className="about-me-left">
                    <h2 className="big-info-heading">
                        ABOUT ME
                </h2>
                    <div className="social-media">
                        <p className="normal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias, possimus excepturi odio nobis sint praesentium reiciendis id. Sequi tempore dolorum qui quod enim laudantium? Impedit earum blanditiis accusamus tenetur.</p>
                        <p className="normal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloremque quo perferendis amet! Nulla, odio?</p>
                        <FaFacebook className="social-media-icon" />
                        <FaYoutube className="social-media-icon" />
                        <FaTwitter className="social-media-icon" />
                        <FaInstagram className="social-media-icon" />
                    </div>
                </div>
                <aside className="about-me-right">
                    <h2 className="big-info-heading">
                        KEEP IN TOUCH
                </h2>
                    <p className="normal-text">
                        <HiLocationMarker />
                        <b> Address: </b>
                    city,state,country
                </p>
                    <p className="normal-text">
                        <HiLocationMarker />
                        <b> Phone: </b>
                    +01 00 00 00
                </p>
                    <p className="normal-text">
                        <FaEnvelope />
                        <b> Email: </b>
                     info@infomail.com
                </p>
                </aside>
            </section>
        </React.Fragment>
    );
}

export default About;
