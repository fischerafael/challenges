import React, { useEffect, useState } from "react";

const index = () => {
  return <Timer />;
};

export default index;

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);

  console.log(time, isRunning);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setTimeout(() => {
      setTime((prev) => prev + 100);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isRunning, time]);

  const handleResume = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  return (
    <div>
      <p>Current Time: {formatMsToS(time)}</p>
      <button onClick={handleResume}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const formatMsToS = (ms: number): string => {
  if (ms === 0) return "0.0";
  if (ms % 1000 === 0) return `${ms / 1000}.0`;
  return String(ms / 1000);
};
