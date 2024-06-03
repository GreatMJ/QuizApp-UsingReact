import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import trophyImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
const Quiz = () => {
  const [userAnswers, setUserAnwers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  // function will handle selection of answer by user
  const handleSelectedAnswer = useCallback((selectedAnswer) => {
    setUserAnwers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }, []);

  // if answer not selected in given time
  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  // check if quiz is completed or not
  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;
  if (isQuizCompleted) {
    return (
      <div id="summary">
        <img src={trophyImage} alt="Icon of Trophy" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  // creating new array and shuffling the answers
  const shuffledArray = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledArray.sort((a, b) => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} time={10000} onTimeout={handleSkipAnswer} />
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
