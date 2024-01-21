import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/settime.css';
const CountdownTimer = () => {
  const olympicStartDate = new Date('2024-07-26T00:00:00Z'); 
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = olympicStartDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p className='para-timeout'>Olympic Games Paris 2024 - 26 July - 11 August, 2024</p>
      <div>
        <span className='cdt-olympics fst-italic'>{timeRemaining.days} Days </span>
        <span className='cdt-olympics fst-italic'>{timeRemaining.hours} Hours </span>
        <span className='cdt-olympics fst-italic'>{timeRemaining.minutes} Minutes </span>
        <span className='cdt-olympics fst-italic'>{timeRemaining.seconds} Seconds </span>
      </div>
    </div>
  );
};

export default CountdownTimer;