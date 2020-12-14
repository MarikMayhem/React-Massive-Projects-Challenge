import React from 'react';
import MainBanner from '../../Components/MainBanner/MainBanner';
import data from '../../data';
import queryString from 'query-string';
import './RoomFeatures.scss'

const RoomFeatures = (props) => {
    const id = queryString.parse(props.location.search).id;
    let room = data.filter(room => room.sys.id === id)
    room = { ...room[0].fields, id: id }

    const { name, description, price, size, capacity, pets, breakfast, extras } = room;
    const images = room.images.map(image => image.fields.file.url)

    return (
        <section className="features">
            <MainBanner
                heading={name}
                linkTo={"/rooms"}
                backgroundImage={images[0]}
                linkDescription={"Back to rooms"}
            />
            <section className="feature-details">
                <div className="picture-gallery">
                    {images.slice(1).map(image => <img className="gallery-image" src={image} alt="room" />)}
                </div>
                <div className="features-data">
                    <div className="features-description">
                        <h3 className="title">Details</h3>
                        <p className="description">{description}</p>
                    </div>

                    <div className="features-info">
                        <h3 className="title">Info</h3>
                        <ul>
                            <li>Price: ${price}</li>
                            <li>Size: ${size} SQFT</li>
                            <li>Max Capacity: {capacity} People</li>
                            <li>{pets ? 'Pets Allowed' : 'No pets Allowed'}</li>
                            {breakfast && <li>Breakfast Included</li>}
                        </ul>
                    </div>
                </div>
                <div className="feautres-extras">
                    <h3 className="title">Extras</h3>

                    <ul>
                        {extras.map(extra => <li>{extra}</li>)}

                    </ul>
                </div>
            </section>

        </section>
    );
}

export default RoomFeatures;
