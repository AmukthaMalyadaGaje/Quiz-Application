import React from "react";

const QuestionNavigator = ({ questions, userAnswers, onQuestionClick }) => {
  // Guard clause to ensure questions are loaded before trying to render the map
  if (!questions || questions.length === 0) return null;

  return (
    <div className="flex justify-center gap-2 my-4">
      {questions.map((_, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-full ${
            userAnswers[index] ? "bg-green-500" : "bg-red-500"
          } text-white`}
          onClick={() => onQuestionClick(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default QuestionNavigator;
