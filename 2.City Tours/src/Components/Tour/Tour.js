import React, { useState } from 'react';
import './Tour.css'

const Tour = ({ id, title, image, subtitle, description, deleteTour }) => {
    const [showDescription, setShowDescription] = useState(false)

    return (
        <section className="tour">
            <img className="tour-image" src={image} alt="tour" />
            <button onClick={() => deleteTour(id)} className="remove-tour">X</button>
            <h2 className="title">{title}</h2>
            <h3 className="subtitle">{subtitle}</h3>
            <p className="open-description">info
            <span onClick={() => setShowDescription(!showDescription)}
                    className="description-toggle">&#9660;
                    </span></p>
            <p className="description">{showDescription && description}</p>
        </section>
    );
}

export default Tour;
