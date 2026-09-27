import React from 'react';
import { Ornament } from './ui';

export default function Footer() {
  return (
    <footer className="px-6 pt-6 pb-24 text-center">
      <img src="/images/flowers-top.png" alt="" className="watercolor mx-auto w-full" />
      <p className="mt-2 font-serif text-lg italic text-muted">With love and duas,</p>
      <p className="mt-1 font-serif text-3xl">The Joad Family</p>

      <Ornament className="my-8" />

      <p className="font-serif text-4xl text-gold">
        S <span className="italic">&amp;</span> N
      </p>
      <p className="eyebrow mt-2 text-muted">16 · 11 · 2026</p>
    </footer>
  );
}
