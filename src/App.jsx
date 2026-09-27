import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';
import OpeningExperience from './components/OpeningExperience';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import EventTimeline from './components/EventTimeline';
import CountdownClock from './components/CountdownClock';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import FloatingPetals from './components/FloatingPetals';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [gateDone, setGateDone] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleOpen = () => {
    setOpened(true);
    setIsMuted(false);
  };

  return (
    <div className="min-h-dvh">
      <main className="relative mx-auto min-h-dvh w-full max-w-[440px] overflow-x-hidden bg-paper shadow-[0_0_60px_rgba(60,45,25,0.12)]">
        <AnimatePresence>
          {!gateDone && <OpeningExperience key="gate" onOpen={handleOpen} onDone={() => setGateDone(true)} />}
        </AnimatePresence>

        {opened && (
          <>
            <MusicPlayer isMuted={isMuted} />
            <FloatingPetals />
            <HeroSection />
            <CoupleSection />
            <EventTimeline />
            <CountdownClock />
            <Footer />

            <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center">
              <div className="flex w-full max-w-[440px] justify-end px-5">
                <button
                  onClick={() => setIsMuted((m) => !m)}
                  aria-label={isMuted ? 'Play music' : 'Mute music'}
                  className="pointer-events-auto flex size-11 items-center justify-center rounded-full border border-line bg-paper/90 text-gold shadow-[0_6px_20px_rgba(60,45,25,0.12)] backdrop-blur"
                >
                  {isMuted ? <VolumeX className="size-4" /> : <Music className="size-4" />}
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
