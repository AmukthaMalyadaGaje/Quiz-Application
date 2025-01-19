import React, { useState, useEffect } from "react";
import QuizPage from "./components/QuizPage";
import StartPage from "./components/StartPage";
import ReportPage from "./components/ReportPage";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes

  const fetchQuizData = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=15&type=multiple"
      );
      const data = await response.json();

      const formattedQuestions = data.results.map((question) => {
        const choices = [
          ...question.incorrect_answers,
          question.correct_answer,
        ];
        return {
          question: question.question,
          choices: choices.sort(() => Math.random() - 0.5),
          correctAnswer: question.correct_answer,
        };
      });

      setQuestions(formattedQuestions);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  useEffect(() => {
    if (quizStarted) {
      fetchQuizData();
    }
  }, [quizStarted]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {!quizStarted && !quizFinished && (
        <StartPage setQuizStarted={setQuizStarted} />
      )}
      {quizStarted && !quizFinished && (
        <QuizPage
          questions={questions}
          setUserAnswers={setUserAnswers}
          userAnswers={userAnswers}
          timeRemaining={timeRemaining}
          setQuizFinished={setQuizFinished}
          setTimeRemaining={setTimeRemaining}
        />
      )}
      {quizFinished && (
        <ReportPage questions={questions} userAnswers={userAnswers} />
      )}
    </div>
  );
};

export default App;
