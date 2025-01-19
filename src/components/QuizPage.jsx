import { useEffect, useState } from "react";

const QuizPage = ({
  questions,
  setUserAnswers,
  userAnswers,
  timeRemaining,
  setQuizFinished,
  setTimeRemaining,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else {
      setQuizFinished(true);
    }
    return () => clearInterval(timer);
  }, [timeRemaining, setQuizFinished]);

  const handleAnswer = (answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };

  const navigateToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    setQuizFinished(true);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-3/4">
      {/* Submit Button at the Top */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Submit Quiz
        </button>
        <p className="text-gray-600">
          Time Remaining: {Math.floor(timeRemaining / 60)}:
          {timeRemaining % 60 < 10 ? "0" : ""}
          {timeRemaining % 60}
        </p>
      </div>

      {/* Question Navigation */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToQuestion(index)}
            className={`w-10 h-10 flex items-center justify-center border rounded-full ${
              userAnswers[index]
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Current Question */}
      {currentQuestion && (
        <div>
          <h2 className="text-lg font-semibold mb-4">
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {currentQuestion.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(choice)}
                className={`p-4 border rounded-lg ${
                  userAnswers[currentQuestionIndex] === choice
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {choice}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
              disabled={currentQuestionIndex === 0}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
            >
              Previous
            </button>
            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
