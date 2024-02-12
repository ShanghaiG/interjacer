import React, { useState, useEffect } from "react";

const StatCard = ({ icon, number, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Rozpocznij animację tylko jeśli docelowa liczba jest większa niż aktualna
    if (count < number) {
      // Oblicz krok na podstawie czasu trwania i docelowej liczby
      let step = number / 100;

      // Ustaw interwał do aktualizacji liczby
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const updatedCount = prevCount + step;
          if (updatedCount < number) {
            return updatedCount;
          } else {
            clearInterval(interval);
            return number;
          }
        });
      }, 100); // Aktualizuj co 100ms

      return () => clearInterval(interval);
    }
  }, [number, count]);

  return (
    <div className="flex flex-col items-center p-4 bg-opacity-50 bg-gray-700 text-white rounded-lg">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-semibold">{Math.round(count)}</div>
      <div className="text-md">{label}</div>
    </div>
  );
};

export const StatsSection = ({ stats }) => {
  return (
    <div className="bg-green-500 p-10">
      <div className="text-2xl text-center text-white font-bold mb-6">
        INTERJACER W LICZBACH
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};
