import { useRef, useState } from "react";

export default () => {
  const [startTime, setStartTime] = useState<number>(0);
  const [now, setNow] = useState<number>(0);
  const interval = useRef<number>();

  const handleStartClick = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    interval.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
    console.log(interval);
  };

  const handleStopClick = () => {
    clearInterval(interval.current);
  };

  return (
    <div>
      <h2>Time: {now - startTime}</h2>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
    </div>
  );
};
