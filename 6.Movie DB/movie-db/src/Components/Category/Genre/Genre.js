import React from 'react';
import './Genre.scss'

const Genre = ({ getGenre, id, name }) => {
    return (
        <div onClick={getGenre} className="genre" tabIndex="1">
            {name}
        </div>
    );
}

export default Genre;
