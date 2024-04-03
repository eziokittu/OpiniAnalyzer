import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ triggerTimer, onTimerEnd, timeInSeconds }) => {
  const [countdown, setCountdown] = useState(timeInSeconds);

  useEffect(() => {
    let intervalId;
    if (triggerTimer) {
      intervalId = setInterval(() => {
        setCountdown((prevCount) => {
          if (prevCount === 0) {
            clearInterval(intervalId);
            onTimerEnd();
            return 10;
          }
          return prevCount - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [triggerTimer, onTimerEnd]);

  return (
    <span>
      {triggerTimer && <p>Try Again in: {countdown}</p>}
    </span>
  );
};

export default CountdownTimer;
