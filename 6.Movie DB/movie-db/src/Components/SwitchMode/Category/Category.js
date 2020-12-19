import React from 'react';
import Genre from './Genre/Genre'

import './Category.scss';

const Category = ({ fetchSelectedGenre, allGenres }) => {
    return (
        <section className="category">
            {allGenres.map(genre => <Genre chooseGenre={() => fetchSelectedGenre(genre.id)}
                key={genre.id}
                id={genre.id}
                genreName={genre.name} />)}
        </section>
    );
}


export default (React.memo(Category));
