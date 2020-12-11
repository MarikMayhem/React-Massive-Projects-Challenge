import React, { useEffect, useState } from 'react';
import Genre from './Genre/Genre'
import axios from '../../axios-custom';
import * as actionTypes from '../../Store/Actions/actionTypes'
import { connect } from 'react-redux';
import './Category.scss';


const Category = (props) => {

    const [genres, setGenres] = useState([])

    const getGenreHandler = (genreId) => {
        axios.get(`discover/movie?&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genreId}
        `).then(res => props.onCategorySelection(res))
    }

    useEffect(() => {
        axios.get('genre/movie/list?&language=en-US')
            .then(res => setGenres(res.data.genres))
    }, [])


    return (

        <section className="category">
            {genres.map(genre => <Genre getGenre={() => getGenreHandler(genre.id)} key={genre.id} id={genre.id} name={genre.name} />)}
        </section>
    );
}

const mapDispatchToProps = dispatch => {

    return {
        onCategorySelection: (category) => dispatch({ type: actionTypes.CATEGORY_CHOSEN, payload: category })
    }

}
export default connect(null, mapDispatchToProps)(Category);
