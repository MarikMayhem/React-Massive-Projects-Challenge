import React, { useState, useEffect } from 'react';
import './PersonPage.scss';
import axios from '../../axios-custom';
import queryString from 'query-string';

const PersonPage = (props) => {
    const personId = queryString.parse(props.location.search).id;
    const [personDetails, setPersonDetails] = useState({});
    const [personImages, setPersonImages] = useState([]);

    useEffect(() => {
        axios.get(`person/${personId}&language=en-US`)
            .then(res => setPersonDetails(res.data))
        axios.get(`person/${personId}/images`)
            .then(res => setPersonImages(res.data.profiles.splice(0, 4)))
    }, [])

    return (
        <div>

        </div>
    );
}

export default PersonPage;
