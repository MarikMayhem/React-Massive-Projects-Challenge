import React from 'react';
import './Genre.scss'

const Genre = ({ chooseGenre, genreName }) => {
    return (
        <div onClick={chooseGenre} className="genre" tabIndex="1">
            {genreName}
        </div>
    );
}

export default Genre;
