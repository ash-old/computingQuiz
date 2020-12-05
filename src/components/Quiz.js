import React, {Component} from 'react';



   const Quiz = ({handleAnswer, data: {question, correct_answer, incorrect_answers}}) => {

    const shuffledAnswer = [correct_answer, ...incorrect_answers];

    return(

        <div>
            <div> <p className="question" dangerouslySetInnerHTML={{ __html:question } }/></div>
                        <div >
                            <button className="button" onClick={() => handleAnswer(shuffledAnswer[0])} dangerouslySetInnerHTML={{ __html:shuffledAnswer[0]}} />
                            <button className="button" onClick={() => handleAnswer(shuffledAnswer[1])} dangerouslySetInnerHTML={{ __html:shuffledAnswer[1]}} />
                            <button className="button" onClick={() => handleAnswer(shuffledAnswer[2])}dangerouslySetInnerHTML={{ __html:shuffledAnswer[2]}} />
                            <button className="button" onClick={() => handleAnswer(shuffledAnswer[3])} dangerouslySetInnerHTML={{ __html:shuffledAnswer[3]}} />
                        </div>
        </div>
    )


   }






export default Quiz;