import React, { useState, useEffect } from 'react';
import './MovieSlider.scss'
import Movie from './Movie/Movie'

const MovieSlider = ({ movieList }) => {

    const [sliderMovies, setSliderMovies] = useState([])
    const [firstFourMovies, setFirstFourMovies] = useState([])

    useEffect(() => {
        setSliderMovies(movieList)
        setFirstFourMovies(movieList.splice(0, 4));
    }, [movieList])


    const nextMoviesHandler = () => {
        setFirstFourMovies(sliderMovies.splice(0, 4))
        setSliderMovies([...sliderMovies, ...firstFourMovies]);
    }

    return (
        <section className="movie-slider">
            <button className="next-button" onClick={nextMoviesHandler}>NEXT 4</button>
            <div className="movies">
                {firstFourMovies.map(movie => {
                    return <Movie
                        key={movie.id}
                        posterPath={movie.poster_path}
                        name={movie.original_title}
                        rating={movie.vote_average}

                    />
                })}
            </div>

        </section>
    );
}

export default MovieSlider;
