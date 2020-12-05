import React, {Component} from 'react';



   const Quiz = ({handleAnswer, data: {question, correct_answer, incorrect_answers}}) => {

    const shuffledAnswer = [correct_answer, ...incorrect_answers];

    return(

        <div>
            <div> <p className="question" dangerouslySetInnerHTML={{ __html:question } }/></div>
                        <div >
                            <button className="button" onClick={() => handleAnswer(shuffledAnswer[0])}>1. {shuffledAnswer[0]}</button>
                            <button className="button" onClick={() => handleAnswer(shuffledAnswer[1])}>2. {shuffledAnswer[1]}</button>
                            <button className="button" onClick={() => handleAnswer(shuffledAnswer[2])}>3. {shuffledAnswer[2]}</button>
                            <button className="button" onClick={() => handleAnswer(shuffledAnswer[3])}>4. {shuffledAnswer[3]}</button>
                        </div>
        </div>
    )


   }






export default Quiz;