import React, { useState } from 'react';
import './TourHub.css'
import Tour from '../../Components/Tour/Tour'
import { tourData } from "../../TourData/tourData";


const TourHub = () => {

    const [tours, setTours] = useState(tourData)

    const removeTourHandler = (id) => {
        setTours(tours.filter(tour => tour.id !== id))
    }

    return (
        <section className="tour-hubs">
            {tours.map(tour => {
                return <Tour
                    key={tour.id}
                    id={tour.id}
                    title={tour.city}
                    image={tour.img}
                    subtitle={tour.name}
                    description={tour.info}
                    deleteTour={removeTourHandler} />
            })}
        </section>
    );
}

export default TourHub;
