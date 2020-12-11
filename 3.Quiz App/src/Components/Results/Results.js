import React from 'react';
import './Results.css'

const Results = ({ correct, startNewGame }) => {
    return (
        <div>
            <p className="new-game-info">You scored {correct} / 5 answers!</p>
            <button className="new-game-btn" onClick={startNewGame}>Play again</button>
        </div>
    );
}

export default Results;
