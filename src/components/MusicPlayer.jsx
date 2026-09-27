import React, { useEffect, useRef } from 'react';

export default function MusicPlayer({ isMuted }) {
  const audioCtxRef = useRef(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isMuted) {
      startAmbientSound();
    } else {
      stopAmbientSound();
    }
    return () => stopAmbientSound();
  }, [isMuted]);

  const startAmbientSound = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      isPlayingRef.current = true;

      // Pentatonic Sufi scale chords frequencies (Hz)
      const scale = [220, 261.63, 293.66, 329.63, 392.00, 440, 523.25, 587.33];

      const playChime = () => {
        if (!isPlayingRef.current || !audioCtxRef.current) return;

        const freq = scale[Math.floor(Math.random() * scale.length)];
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);

        // Soft ambient attack & decay
        gain.gain.setValueAtTime(0.001, audioCtxRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, audioCtxRef.current.currentTime + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 4.5);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        osc.stop(audioCtxRef.current.currentTime + 4.6);

        // Schedule next gentle chime
        const nextTime = 2000 + Math.random() * 2500;
        timerRef.current = setTimeout(playChime, nextTime);
      };

      playChime();
    } catch (e) {
      console.log('Web Audio setup:', e);
    }
  };

  const stopAmbientSound = () => {
    isPlayingRef.current = false;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  return null;
}
