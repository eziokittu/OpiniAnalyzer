import React, { useState, useEffect } from 'react';

const BackgroundTransition = ({ children }) => {
  const colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-purple-100'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Change color every cycle
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <div className={`h-full ${colors[colorIndex]} transition-all duration-3000 ease-in-out`}>
      {children}
    </div>
  );
};

export default BackgroundTransition;
