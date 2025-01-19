import React from "react";

const Report = ({ questions, userAnswers }) => {
  console.log(userAnswers);
  return (
    <div className="w-full max-w-3xl bg-white p-6 shadow-md rounded-lg">
      {questions.map((question, index) => {
        const correctAnswer = question.correct_answer;
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === correctAnswer;

        let answerClass = "text-black"; // Default color for unanswered
        if (userAnswer) {
          answerClass = isCorrect ? "text-green-500" : "text-red-500";
        }

        return (
          <div key={index} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-semibold">{`Q${index + 1}: ${
              question.question
            }`}</h3>
            <p className="mt-2">
              <span className="font-bold">Correct Answer: </span>
              {correctAnswer}
            </p>
            <p className={`mt-2 ${answerClass}`}>
              <span className="font-bold">Your Answer: </span>
              {userAnswer ? userAnswer : "Not Answered"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Report;
