import { React, useState } from 'react';
import { Questions } from './Questions';


const Question = () => {
  const questions = Questions();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleNextQuestion = () => {
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
    {/* {questions.map((question) => ( */}
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
          {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </li>
              ))}
            </ul>
            <button onClick={handleNextQuestion}>Next Question</button>
    </>
  )
}

export default Question;