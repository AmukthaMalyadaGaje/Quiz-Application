import React, { useEffect, useState } from "react";

const Timer = ({ onTimeUp }) => {
  const [time, setTime] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    if (time <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, onTimeUp]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">
        Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
    </div>
  );
};

export default Timer;
