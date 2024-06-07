import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";

import Question from "./Question.jsx";
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
    return <Summary userAnswers={userAnswers}/>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectedAnswer}
      />
    </div>
  );
};

export default Quiz;
