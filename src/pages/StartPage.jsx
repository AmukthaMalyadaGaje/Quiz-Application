import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartPage = ({ setEmail, setQuestions, questions }) => {
  const [inputEmail, setInputEmail] = useState("");
  const navigate = useNavigate();
  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=15");
      // if (response.status === 429) {
      //   console.error("API rate limit exceeded. Please try again later.");
      //   return;
      // }
      const data = await response.json().then((data) => {
        setQuestions(data.results);
        console.log(data.results);
        navigate("/quiz");
      });

      console.log(questions);
      // navigate("/quiz");
    } catch (error) {
      console.error("Error fetching questions: ", error);
    }
  };

  const handleStart = async () => {
    setEmail(inputEmail);
    // await fetchQuestions();
    // console.log(questions);

    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Quiz App</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        className="p-2 border rounded mb-4 w-64"
      />
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600"
        disabled={!inputEmail}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartPage;
