import React from 'react';
import { Link } from 'react-router-dom';
import './Person.scss'

const Person = ({ id, personPortrait, name, knownFor, roleName }) => {
    return (
        <div className="person">
            <Link
                to={{
                    pathname: `/person`,
                    search: `?id=${id}`
                }}>
                <img className="portrait" src={`https://image.tmdb.org/t/p/w500/${personPortrait}`} alt="portrait" />
            </Link>
            <p className="name">{name}</p>
            <p className="person-info">{knownFor ? `Trending for ${knownFor}` : `${roleName}`}</p>
        </div>
    );
}

export default Person;
