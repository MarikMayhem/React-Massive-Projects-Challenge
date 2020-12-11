import React, { useState, useEffect } from 'react';
import Answer from '../Answer/Answer';
import './Question.css';

const Question = (props) => {
    const { category, difficulty, question, correct_answer, incorrect_answers } = props.questionData;
    const chooseAnswer = props.chooseAnswer;
    const [answers, setAnswers] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        setAnswers([...incorrect_answers, correct_answer])
    }, [incorrect_answers, correct_answer])

    const chooseAnswerHandler = (choosedAnswer) => {
        chooseAnswer(choosedAnswer, correct_answer)
        setIsDisabled(true)
        setAnswers(answers.filter(answer => answer === choosedAnswer))
    }

    const entityToChar = str => {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = str;
        return textarea.value;
    }

    return (
        <section className="question">
            <div className="question-data">
                <div className="question-type">
                    <p>Category: {category}</p>
                    <p>Difficulty: {difficulty}</p>
                </div>
                <p>{entityToChar(question)}</p>
            </div>
            { answers.map((answer, idx) => <Answer
                key={idx}
                answer={entityToChar(answer)}
                chooseAnswer={chooseAnswerHandler}
                disabled={isDisabled}
            />)}
        </section>
    );


}

export default Question;
