import React from "react";

const Report = ({ questions, userAnswers }) => {
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correct_answer === userAnswers[index]) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const totalQuestions = questions.length;

  return (
    <div className="w-full max-w-2xl bg-white p-6 shadow-md rounded-lg my-6">
      <h2 className="text-xl font-bold mb-4">Quiz Report</h2>
      <p className="text-lg mb-4">
        You scored {score} out of {totalQuestions}.
      </p>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Question</th>
            <th className="border px-4 py-2">Your Answer</th>
            <th className="border px-4 py-2">Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{question.question}</td>
              <td className="border px-4 py-2">{userAnswers[index]}</td>
              <td className="border px-4 py-2">{question.correct_answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
