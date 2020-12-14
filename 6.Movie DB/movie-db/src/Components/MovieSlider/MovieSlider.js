import React, { useState, useEffect } from 'react';
import './MovieSlider.scss'
import { FaArrowRight } from 'react-icons/fa'
import Movie from './Movie/Movie'

const MovieSlider = ({ visible, movieList }) => {

    const [sliderMovies, setSliderMovies] = useState([])
    const [firstFourMovies, setFirstFourMovies] = useState([])

    useEffect(() => {
        console.log('activate')
        setSliderMovies(movieList)
        setFirstFourMovies(movieList.splice(0, 4));
    }, [movieList])


    const nextMoviesHandler = () => {
        setFirstFourMovies(sliderMovies.splice(0, 4))
        setSliderMovies([...sliderMovies, ...firstFourMovies]);
    }

    return (
        <section style={!visible ? { display: 'none' } : null} className="movie-slider">
            {movieList.length > 0 && <FaArrowRight className="next-button" onClick={nextMoviesHandler} />}
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

        </section >
    );
}

export default MovieSlider;
