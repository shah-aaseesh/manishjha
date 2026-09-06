import { useState, useEffect } from 'react';

export const useCountdown = (initialDays = 23, initialHours = 7, initialMinutes = 37, initialSeconds = 14) => {
  const [timeLeft, setTimeLeft] = useState({
    days: String(initialDays).padStart(2, '0'),
    hours: String(initialHours).padStart(2, '0'),
    minutes: String(initialMinutes).padStart(2, '0'),
    seconds: String(initialSeconds).padStart(2, '0')
  });

  useEffect(() => {
    // Target date calculated dynamically
    const target = new Date();
    target.setDate(target.getDate() + initialDays);
    target.setHours(target.getHours() + initialHours);
    target.setMinutes(target.getMinutes() + initialMinutes);
    target.setSeconds(target.getSeconds() + initialSeconds);

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [initialDays, initialHours, initialMinutes, initialSeconds]);

  return timeLeft;
};
