import { React, useState } from "react";
import { Questions } from "./Questions"

const Question = () => {
  const questions = Questions()


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h3>Question {currentQuestion + 1}</h3>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h3>Quiz Completed!</h3>
        </div>
      )}
    </div>
  );
};

export default Question;