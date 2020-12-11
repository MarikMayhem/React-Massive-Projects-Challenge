import React, { useState, useEffect } from 'react';
import data from '../../data';
import Room from '../../Components/Room/Room'
import './FeaturedRooms.scss'


const FeaturedRooms = () => {

    const [featuredRooms, setFeaturedRooms] = useState([])

    useEffect(() => {
        let featured = data.filter(room => room.fields.featured === true);
        featured = featured.map(room => ({ ...room.fields, id: room.sys.id, mainimage: room.fields.images[0].fields.file.url }))
        setFeaturedRooms(featured) //Sort by price
        console.log(featured)
    }, [])

    return (
        <section className="featured-section">
            <h2 className="mid-heading">Featured Rooms</h2>
            <hr className="underline" />
            <div className="featured-rooms">
                {featuredRooms.map(room => {
                    return <Room
                        key={room.id}
                        id={room.id}
                        name={room.name}
                        image={room.mainimage}
                        price={room.price} />
                })}
            </div>

        </section>
    );
}

export default FeaturedRooms;
