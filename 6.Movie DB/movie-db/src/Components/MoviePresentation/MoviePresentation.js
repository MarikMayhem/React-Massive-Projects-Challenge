
import React, { useState, useEffect } from 'react';
import './MoviePresentation.scss'
import { FaPlayCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import axios from '../../axios-custom';
import Modal from '../UI/Modal/Modal';

const MoviePresentation = ({ id, backdrop, title }) => {
    const [movieTrailerLink, setMovieTrailerLink] = useState('');
    const [displayModal, setDisplayModal] = useState(false);
    const trailerIframe = <iframe title="trailer" className="trailer" src={`https://www.youtube.com/embed/${movieTrailerLink}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    useEffect(() => {
        axios.get(`movie/${id}/videos?&language=en-US`)
            .then(res => setMovieTrailerLink(res.data.results[0].key))
    }, [id])

    const closeModalHandler = () => {
        setDisplayModal(false);
    };
    return (
        <section className="movie-presentation">
            <img className="movie-backdrop"
                src={`https://image.tmdb.org/t/p/original/${backdrop}`}
                alt="background" />
            <FaPlayCircle onClick={() => setDisplayModal(!displayModal)} className="play-icon" />

            <Modal show={displayModal} modalClosed={closeModalHandler}>
                <div className="title">
                    <h2 >{title}</h2>
                    <AiOutlineClose className="close" onClick={closeModalHandler} />
                </div>
                {trailerIframe}

            </Modal>
        </section>
    );
}

export default MoviePresentation;
