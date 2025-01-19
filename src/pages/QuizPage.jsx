import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import QuestionNavigator from "../components/QuestionNavigator";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

const QuizPage = ({
  questions,
  setQuestions,
  userAnswers,
  setUserAnswers,
  setQuizCompleted,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=15");
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions: ", error);
    }
  };

  const handleStartQuiz = async () => {
    await fetchQuestions();
    setQuizStarted(true);
  };

  const handleSubmit = () => {
    setQuizCompleted(true);
    navigate("/report");
  };

  const handleQuestionChange = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <button
          onClick={handleStartQuiz}
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-600"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Timer onTimeUp={handleSubmit} />
      <QuestionNavigator
        questions={questions}
        userAnswers={userAnswers}
        onQuestionClick={handleQuestionChange}
      />
      {questions.length > 0 ? (
        <Question
          question={questions[currentQuestionIndex]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          questionIndex={currentQuestionIndex}
        />
      ) : (
        <div>Loading questions...</div>
      )}
      <div className="flex justify-between w-full max-w-2xl mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`py-2 px-4 rounded font-bold ${
            currentQuestionIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
          className={`py-2 px-4 rounded font-bold ${
            currentQuestionIndex === questions.length - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizPage;
