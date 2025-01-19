import { useState } from "react";

const StartPage = ({ setQuizStarted }) => {
  const [email, setEmail] = useState("");

  const handleStart = () => {
    if (email.trim()) {
      setQuizStarted(true);
    } else {
      alert("Please enter your email!");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-96 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to the Quiz
      </h1>
      <p className="text-gray-600 mb-6">Enter your email to get started.</p>
      <input
        type="email"
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleStart}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartPage;
