import React from "react";
import { useNavigate } from "react-router-dom";
import Report from "../components/Report";

const ReportPage = ({ questions, userAnswers, resetQuiz }) => {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    resetQuiz();
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Report</h1>
      <Report questions={questions} userAnswers={userAnswers} />
      <button
        onClick={handlePlayAgain}
        className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Play Again
      </button>
    </div>
  );
};

export default ReportPage;
