import React from 'react';
import './Person.scss'

const Person = ({ personPortrait, name, knownFor }) => {
    return (
        <div className="person">
            <img className="portrait" src={`https://image.tmdb.org/t/p/w500/${personPortrait}`} alt="portrait" />
            <p className="name">{name}</p>
            <p className="known-for">Trending for: {knownFor}</p>
        </div>
    );
}

export default Person;