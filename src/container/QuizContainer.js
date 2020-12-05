import React, { useEffect, useState } from 'react';
import './QuizContainer.css'


const apiUrl = 'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple';


function QuizContainer() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            setQuestions(data.results);
        })
    }, [])

        return (questions.length > 0 ?(
            <div className="container">
                 
                <div> <p dangerouslySetInnerHTML={{ __html:questions[0].question } }/></div>
                    <div >
                        <button className="button">1. {questions[0].correct_answer}</button>
                        <button className="button">2. {questions[0].incorrect_answers[0]}</button>
                        <button className="button">3. {questions[0].incorrect_answers[1]}</button>
                        <button className="button">4. {questions[0].incorrect_answers[2]}</button>
                    </div>
                
            </div>
            ) : (
                <p className="loading">loading...</p>
            )
        )
}


export default QuizContainer;