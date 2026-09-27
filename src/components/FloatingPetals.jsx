import React, { useMemo } from 'react';

const COLORS = ['#F2C6C2', '#F7DAD4', '#EBB8B5', '#F9E7DF'];

export default function FloatingPetals({ count = 12 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 10,
        duration: 12 + Math.random() * 10,
        delay: -Math.random() * 20,
        sway: 20 + Math.random() * 40,
        color: COLORS[i % COLORS.length],
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-30 flex justify-center">
      <div className="relative h-full w-full max-w-[440px] overflow-hidden">
        {petals.map((p) => (
          <span
            key={p.id}
            className="petal absolute -top-8"
            style={{
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--sway': `${p.sway}px`,
            }}
          >
            <svg width={p.size} height={p.size * 1.3} viewBox="0 0 20 26" style={{ opacity: 0.8 }}>
              <path d="M10 0C16 6 20 12 18 19C16 24 12 26 10 26C8 26 4 24 2 19C0 12 4 6 10 0Z" fill={p.color} />
              <path d="M10 3C10 10 10 18 10 25" stroke="#fff" strokeOpacity="0.5" strokeWidth="0.8" fill="none" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
