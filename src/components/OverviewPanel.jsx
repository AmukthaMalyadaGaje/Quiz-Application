const OverviewPanel = ({ questionCount, onNavigate }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className="grid grid-cols-5 gap-2 mt-4">
        {[...Array(questionCount)].map((_, index) => (
          <button
            key={index}
            className="w-8 h-8 rounded-full bg-gray-300"
            onClick={() => onNavigate(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OverviewPanel;
