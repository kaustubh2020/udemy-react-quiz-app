import { useState } from "react";

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState([]);
  const [userAnswers, setUserAnswers] = useState(0);

  return <p>Currently active quetsion</p>;
};

export default Quiz;
