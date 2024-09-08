'use client'

import { useState, useEffect } from 'react';
import stars from '/public/images/bg-stars.svg';
import hills from '@/public/images/pattern-hills.svg';
import Image from 'next/image';

const Timer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [flip, setFlip] = useState(false);

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
    <>
        <div class="container">
          <div class="container-segment">
            <div class="segment  text-SoftRed text-center  text-bold ">
              <div class="flip-card  shadow-lg 
              rounded-[.1em] relative inline-flex flex-col
               " data-days-tens>
               <div class="top ">{value}</div>
               <div class="bottom ">{value}</div>
              </div>
              <div class="flip-card shadow-lg rounded-[.1em] relative inline-flex flex-col " data-days-ones>
                 <div class="top ">{value}</div>
                 <div class="bottom ">{value}</div>
              </div>
            </div>
           
          </div>
            {/* <div className="flip-card-front text-4xl font-bold text-pink-500">{value}</div>
           <div className="flip-card-back text-4xl font-bold text-pink-500">{value}</div> */}
        </div>
        <div className="text-sm uppercase text-gray-400">{label}</div>
    </>
  );

  return (
    <>
    <div
      className="flex items-center bg-stars relative  justify-center min-h-screen 
      bg-contain bg-center text-white font-sans md:bg-stars md:bg-contain"
      // style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
    >
      <div className="flex space-x-4">
        {renderFlipCard(hours, 'Hours')}
        {renderFlipCard(minutes, 'Minutes')}
        {renderFlipCard(seconds, 'Seconds')}
      </div>
    </div>
     
     
    <div className='bottom-half  '>
      <Image
      src={"/images/pattern-hills.svg"}
      width={ 0}
      height={30}
      className='object-fit w-full sm:h-40 sm:mt-[-3rem]'
      />
     </div>
    </>
  );
};

export default ;


