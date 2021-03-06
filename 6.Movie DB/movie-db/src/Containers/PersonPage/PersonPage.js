import React, { useState, useEffect } from 'react';
import './PersonPage.scss';
import axios from '../../axios-custom';
import queryString from 'query-string';
import MovieSlider from '../../Components/MovieSlider/MovieSlider';

const PersonPage = (props) => {
    const personId = queryString.parse(props.location.search).id;
    const [personDetails, setPersonDetails] = useState({});
    const [personBirthday, setPersonBirthday] = useState('');
    const [personImages, setPersonImages] = useState([]);
    const [personCredits, setPersonCredits] = useState([]);

    useEffect(() => {
        axios.get(`person/${personId}&language=en-US`)
            .then(res => {
                setPersonDetails(res.data)
                setPersonBirthday(res.data.birthday.split('-').join(', '))
            })
        axios.get(`person/${personId}/images`)
            .then(res => setPersonImages(res.data.profiles.splice(0, 4)))

        axios.get(`person/${personId}/movie_credits?&language=en-US`)
            .then(res => setPersonCredits(res.data.cast))

    }, [personId])

    return (
        <main className="person">
            <h1>{personDetails.name}</h1>
            <div className="person-biography-section">
                <img src={`https://image.tmdb.org/t/p/original/${personDetails.profile_path}`}
                    alt="portrait"
                    className="portrait" />
                <p className="biography">
                    {personDetails.biography}
                </p>
            </div>
            <div className="person-info-section">
                <p className="info-heading">Born on {personBirthday}</p>
                <p className="info-heading">{personDetails.place_of_birth}</p>
                <p className="info-heading">Popularity {personDetails.popularity}</p>
                <p className="info-heading">Known for {personDetails.known_for_department}</p>
            </div>
            <div className="person-images-section">
                {personImages.map(image => {
                    return <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt="images" />
                })}
            </div>
            <h2>Movies starring {personDetails.name}</h2>
            <MovieSlider movieList={personCredits} />
        </main>
    );

}

export default PersonPage;
