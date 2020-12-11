import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import './ServiceHeading.scss'

const ServiceHeading = () => {
    return (
        <section className="service-heading">
            <h2 className="mid-heading">Services</h2>
            <hr className="underline" />
            <div className="services">
                <article className="service">
                    <FaCocktail className="nav-icon" />
                    <h3>Free Cocktails</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </article>
                <article className="service">
                    <FaHiking className="nav-icon" />
                    <h3>Endless Hikings</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </article>
                <article className="service">
                    <FaShuttleVan className="nav-icon" />
                    <h3>Free Shuttle                    </h3>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </article>
                <article className="service">
                    <FaBeer className="nav-icon" />
                    <h3>Strongest Beer</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </article>
            </div>
        </section>
    );
}

export default ServiceHeading;
