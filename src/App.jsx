import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ReportPage from "./pages/ReportPage";
import Navbar from "./components/Navbar";
import StartPage from "./pages/StartPage";
import QuizPage from "./pages/QuizPage";

const App = () => {
  const [email, setEmail] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const resetQuiz = () => {
    setUserAnswers([]);
    setQuestions([]);
    setQuizCompleted(false);
  };

  return (
    <Router>
      {email && <Navbar resetQuiz={resetQuiz} />}
      <Routes>
        <Route
          path="/"
          element={
            <StartPage
              setEmail={setEmail}
              setQuestions={setQuestions}
              questions={questions}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            email ? (
              <QuizPage
                questions={questions}
                setQuestions={setQuestions}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                setQuizCompleted={setQuizCompleted}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/report"
          element={
            quizCompleted ? (
              <ReportPage
                questions={questions}
                userAnswers={userAnswers}
                resetQuiz={resetQuiz}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
