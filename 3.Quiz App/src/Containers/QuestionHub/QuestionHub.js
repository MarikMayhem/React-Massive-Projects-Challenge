import React, { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import './QuestionHub.css'
import Question from '../../Components/Question/Question'
import Results from '../../Components/Results/Results';

const QuestionHub = () => {
    const initialState = { correct: 0, answers: 0 }
    const [questions, setQuestions] = useState([])
    const [error, setError] = useState('')
    const [answers, setAnswers] = useState(initialState)

    const getQuestions = useCallback(() => {
        Axios.get('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(res => setQuestions(res.data.results))
            .catch(res => setError('Network Error'))
    }, [])

    useEffect(() => {
        getQuestions()
    }, [getQuestions])

    const startNewGameHandler = () => {
        setQuestions([])
        getQuestions()
        setAnswers(initialState)
    }
    const chosenAnswerHandler = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            let allAnswers = answers.answers += 1;
            let correctAnswers = answers.correct += 1;
            setAnswers({
                correct: correctAnswers,
                answers: allAnswers
            })
        } else {
            let allAnswers = answers.answers += 1;
            setAnswers(oldState => ({
                ...oldState,
                answers: allAnswers
            }))
        }
    }

    let questionsCollection = <Results correct={answers.correct} startNewGame={startNewGameHandler} />

    if (answers.answers !== 5) {
        questionsCollection = questions.map((question, idx) => <Question key={idx} questionData={question} chooseAnswer={chosenAnswerHandler} />)
    }
    if (error) {
        questionsCollection = <h2>{error}</h2>
    }

    return (
        <main className="question-hub">
            <div className="heading">
                <h1>Quiz Hub</h1>
            </div>
            {questionsCollection}
        </main>
    );
}

export default QuestionHub;
