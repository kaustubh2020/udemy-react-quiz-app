import { useState } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";

import QUESTIONS from "../questions";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const suffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  suffledAnswers.sort(() => Math.random() - 0.5);

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {suffledAnswers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
