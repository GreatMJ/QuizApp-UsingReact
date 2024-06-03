import React, { useState } from "react";
import QUESTIONS from "../questions.js";
import trophyImage from "../assets/quiz-complete.png"
const Quiz = () => {
  const [userAnswers, setUserAnwers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  
  // function will handle selection of answer by user
  const handleSelectedAnswer = (selectedAnswer) => {
    setUserAnwers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  };

  // check if quiz is completed or not
  const isQuizCompleted=activeQuestionIndex===QUESTIONS.length;
  if(isQuizCompleted){
    return <div id="summary">
      <img src={trophyImage} alt="Icon of Trophy" />
      <h2>Quiz Completed</h2>
    </div>
  }

  // creating new array and shuffling the answers
  const shuffledArray = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledArray.sort((a, b) => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledArray.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
