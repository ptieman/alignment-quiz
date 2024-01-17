import React from 'react';

const Question = ({questions}) => {

  return (
    <>
    <ul>
    {questions.map((question) => (
          <li key={question.id}>{question.question}</li>

        ))}
      </ul>
    </>
  )
}

export default Question;