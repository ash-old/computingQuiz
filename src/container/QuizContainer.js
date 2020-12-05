import React, { useEffect, useState } from 'react';
import './QuizContainer.css'
import Quiz from '../components/Quiz.js'


const apiUrl = 'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple';


function QuizContainer() {
    const [question, setQuestions] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            setQuestions(data.results);
        })
    }, [])

        return (question.length > 0 ?(
            <div className="container">
                 
                <Quiz data={question[0]} handleAnswer={handleAnswer}/>
                
            </div>
            ) : (
                <p className="loading">loading...</p>
            )
        )

    function handleAnswer(e){
        console.log("made it")
    };
}


export default QuizContainer;