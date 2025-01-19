const ReportPage = ({ questions, userAnswers }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-3/4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Quiz Report</h1>
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              {index + 1}. {q.question}
            </h2>
            <p className="text-gray-600">
              <strong>Your Answer:</strong>{" "}
              {userAnswers[index] || "No answer selected"}
            </p>
            <p className="text-gray-600">
              <strong>Correct Answer:</strong> {q.correctAnswer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportPage;
