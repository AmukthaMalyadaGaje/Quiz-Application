import React from "react";

const Question = ({ question, userAnswers, setUserAnswers, questionIndex }) => {
  const handleAnswerSelection = (answer) => {
    const updatedAnswers = { ...userAnswers };
    updatedAnswers[questionIndex] = answer; // Store the answer by question index
    setUserAnswers(updatedAnswers);
  };

  if (!question) {
    return <div>Loading question...</div>;
  }

  const options = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();

  return (
    <div className="w-full max-w-2xl bg-white p-6 shadow-md rounded-lg my-6">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelection(option)}
            className={`border p-3 rounded ${
              userAnswers[questionIndex] === option ? "bg-blue-300" : ""
            } hover:bg-blue-200`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
