
import React, { useState, useEffect, useRef } from 'react';
import './MoviePresentation.scss'
import { FaPlayCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from '../UI/Modal/Modal';

const MoviePresentation = ({ backdrop, title, youtubeLink }) => {
    const [displayModal, setDisplayModal] = useState(false);
    const iframeRef = useRef(null);
    const trailerIframe = <iframe ref={iframeRef} title="trailer" id="trailer" src={`https://www.youtube-nocookie.com/embed/${youtubeLink}?playlist=${youtubeLink}?rel=0&controls=0&hd=1&enablejsapi=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
    const MODAL_OPEN_CLASS = "open-modal";


    const openModalHandler = () => {
        setDisplayModal(true);
        document.body.classList.add(MODAL_OPEN_CLASS);
    }

    const closeModalHandler = () => {
        setDisplayModal(false);
        document.body.classList.remove(MODAL_OPEN_CLASS);

        //Communicate with youtubejs api to stop playback
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    };
    return (
        <section className="movie-presentation">
            <img className="movie-backdrop"
                src={`https://image.tmdb.org/t/p/original/${backdrop}`}
                alt="background" />
            <FaPlayCircle onClick={() => setDisplayModal(openModalHandler)} className="play-icon" />

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
