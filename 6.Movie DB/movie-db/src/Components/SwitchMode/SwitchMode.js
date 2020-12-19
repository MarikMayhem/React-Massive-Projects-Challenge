import React from 'react';
import Category from './Category/Category';
import Search from './Search/Search';


const Sort = ({ search, allMovieGenres, fetchSelectedGenre }) => {
    return (
        <section className="sort">
            {search ? <Category fetchSelectedGenre={fetchSelectedGenre} allGenres={allMovieGenres} /> : <Search />}
        </section>
    );
}


export default React.memo(Sort);
