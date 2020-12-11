import React from 'react';
import './Answer.css'

const Answer = ({ answer, chooseAnswer, disabled }) => {
    return (
        <button className="answer" disabled={disabled} onClick={() => chooseAnswer(answer)}>
            {answer}
        </button>
    );
}

export default Answer;
