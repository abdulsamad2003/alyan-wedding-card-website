import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DOOR_EASE = [0.65, 0, 0.35, 1];

function Door({ side, isOpening }) {
  const isLeft = side === 'left';
  return (
    <motion.div
      className={`absolute inset-y-0 w-1/2 overflow-hidden ${isLeft ? 'left-0' : 'right-0'}`}
      style={{ transformOrigin: isLeft ? 'left center' : 'right center', backfaceVisibility: 'hidden' }}
      initial={false}
      animate={isOpening ? { rotateY: isLeft ? -110 : 110 } : { rotateY: 0 }}
      transition={{ duration: 2, delay: 0.5, ease: DOOR_EASE }}
    >
      <img
        src="/images/gate.jpg"
        alt=""
        draggable={false}
        className={`absolute inset-y-0 h-full w-[200%] max-w-none object-cover ${isLeft ? 'left-0' : 'right-0'}`}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: isLeft
            ? 'linear-gradient(to right, transparent 60%, rgba(60,40,20,0.18))'
            : 'linear-gradient(to left, transparent 60%, rgba(60,40,20,0.18))',
        }}
        animate={{ opacity: isOpening ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        className="absolute inset-0 bg-[#3a2a18]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpening ? 0.35 : 0 }}
        transition={{ duration: 2, delay: 0.5, ease: DOOR_EASE }}
      />
    </motion.div>
  );
}

export default function OpeningExperience({ onOpen, onDone }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    onOpen();
    setTimeout(onDone, 2700);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex justify-center"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div
        className="relative h-dvh w-full max-w-[440px] cursor-pointer overflow-hidden select-none"
        style={{ perspective: 1600 }}
        onClick={handleOpen}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: 'radial-gradient(ellipse at center, rgba(255,248,235,0.95), rgba(255,248,235,0) 65%)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpening ? [0, 1, 0] : 0 }}
          transition={{ duration: 2.4, delay: 0.4, times: [0, 0.35, 1] }}
        />

        <Door side="left" isOpening={isOpening} />
        <Door side="right" isOpening={isOpening} />

        <motion.div
          className="absolute inset-x-0 top-[38%] z-20 flex flex-col items-center"
          animate={isOpening ? { opacity: 0, scale: 0.85 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <span className="absolute -inset-3 animate-ping rounded-full border border-gold/40 [animation-duration:2.5s]" />
            <div className="relative flex size-32 flex-col items-center justify-center rounded-full border border-gold/60 bg-paper/95 shadow-[0_10px_40px_rgba(90,60,20,0.25)]">
              <div className="absolute inset-1.5 rounded-full border border-gold/30" />
              <span className="font-serif text-[38px] leading-none text-ink">
                S<span className="italic text-gold">&amp;</span>N
              </span>
              <span className="eyebrow mt-1 text-[9px] text-muted">16 · 11 · 26</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-10 z-20 flex justify-center"
          animate={{ opacity: isOpening ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-full border border-gold/50 bg-paper/90 px-6 py-3 text-center shadow-[0_8px_30px_rgba(90,60,20,0.2)] backdrop-blur">
            <p className="font-serif text-lg italic leading-none text-ink">You are invited</p>
            <p className="eyebrow mt-1.5 text-[10px] text-gold">Tap to open the gates</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
