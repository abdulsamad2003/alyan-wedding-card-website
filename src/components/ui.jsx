import React from 'react';
import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Ornament({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-10 bg-gold/40" />
      <span className="size-1.5 rotate-45 bg-gold/70" />
      <span className="h-px w-10 bg-gold/40" />
    </div>
  );
}

export function SectionTitle({ eyebrow, title }) {
  return (
    <Reveal className="mb-10 text-center">
      <p className="eyebrow text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-[34px] leading-tight text-ink">{title}</h2>
      <Ornament className="mt-4" />
    </Reveal>
  );
}
