import React, { useEffect, useState } from 'react';

const TARGET = new Date('2026-11-07T22:00:00+05:30').getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    Days: Math.floor(diff / 86400000),
    Hours: Math.floor((diff % 86400000) / 3600000),
    Minutes: Math.floor((diff % 3600000) / 60000),
    Seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function CountdownClock() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-sage px-6 py-14 text-center text-paper">
      <p className="eyebrow text-paper/60">Counting down to</p>
      <h2 className="mt-2 font-serif text-3xl italic">the Nikah</h2>

      <div className="mt-8 grid grid-cols-4 divide-x divide-paper/15">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label}>
            <span className="block font-serif text-4xl tabular-nums">{String(value).padStart(2, '0')}</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-paper/60">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
