// src/components/LoadingScreen.jsx
import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onLoadingComplete();
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-24 h-24 mb-4">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-gray-300"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="text-blue-500"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${progress}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold">{`${progress}%`}</span>
        </div>
      </div>
      <p className="text-lg font-medium">Please wait a moment...</p>
    </div>
  );
};

export default LoadingScreen;
