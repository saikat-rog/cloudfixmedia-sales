import { useState, useEffect } from "react";

function getTimeLeft(targetDate) {
  const now = new Date();
  const difference = new Date(targetDate) - now;
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function BookingTimer() {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999); // Set target time to 11:59 PM today
  const targetDate = currentDate.toISOString();
  
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <section className="w-full h-auto flex flex-col text-white items-center justify-center pt-20 pb-10 space-y-5 md:space-y-10">
      <h1 className="text-center text-xl md:text-4xl font-bold">Book Before The Timer Ends To Grab <br />Invaluable Bonuses!!</h1>
      <div className="flex space-x-2 bg-accent3 px-3 md:px-8 py-3 md:py-5 rounded-xl md:rounded-3xl">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col items-center justify-center w-20 md:w-40 h-20 md:h-40 bg-accent2 text-white rounded-xl md:rounded-3xl "
          >
            <span className="text-lg md:text-5xl font-bold">{value}</span>
            <span className="text-lg md:text-2xl capitalize">{unit}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


export default BookingTimer;
