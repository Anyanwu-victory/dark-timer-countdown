'use client'

import { useState, useEffect } from 'react';
import stars from '/public/images/bg-stars.svg';

const Timer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [flip, setFlip] = useState(false);

  // const backgrounds = [
  //   '/bg1.jpg',
  //   '/bg2.jpg',
  //   '/bg3.jpg',
  // ];

  // const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setFlip(true);
        setTimeLeft(timeLeft - 1);
        setTimeout(() => setFlip(false), 600); // Reset flip after animation duration
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  // useEffect(() => {
  //   const backgroundTimerId = setInterval(() => {
  //     setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  //   }, 10000); // 10 seconds interval

  //   return () => clearInterval(backgroundTimerId);
  // }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(remainingSeconds).padStart(2, '0'),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  const renderFlipCard = (value, label) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center flip-card">
      <div className={`flip-card-inner ${flip ? 'animate-flip' : ''}`}>
        <div className="flip-card-front text-4xl font-bold text-pink-500">{value}</div>
        <div className="flip-card-back text-4xl font-bold text-pink-500">{value}</div>
      </div>
      <div className="text-sm uppercase text-gray-400">{label}</div>
    </div>
  );

  return (
    <div
      className="flex items-center bg-stars  justify-center min-h-screen bg-contain bg-center text-white font-sans"
      // style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
    >
      <div className="flex space-x-4">
        {renderFlipCard(hours, 'Hours')}
        {renderFlipCard(minutes, 'Minutes')}
        {renderFlipCard(seconds, 'Seconds')}
      </div>
    </div>
  );
};

export default Timer;
