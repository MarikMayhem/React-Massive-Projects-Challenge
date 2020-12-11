import React from 'react';
import './Room.scss'
// import image from '../../Assets/images/room-1.jpeg'
import { Link } from 'react-router-dom'


// const Room = ({ name, image, price }) => {
const Room = ({ name, id, price, image }) => {

    return (
        <article className="room">
            <section className="room-image-section">
                <div className="image-overlay" />
                <img className="room-image" src={image} alt="room" />
                <div className="price-container">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link className="reveal-link" to={{
                    pathname: `/features`,
                    search: `?id=${id}`
                }}>Features</Link>
            </section>
            <section className="room-title-section">
                <h2>{name}</h2>
            </section>
        </article>
    );
}

export default Room;
