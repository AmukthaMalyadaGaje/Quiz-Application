import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ resetQuiz }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">QUIZ APP</h1>
      <button
        onClick={handleRestart}
        className="bg-white text-blue-500 font-semibold py-1 px-4 rounded hover:bg-gray-200"
      >
        Restart
      </button>
    </nav>
  );
};

export default Navbar;
