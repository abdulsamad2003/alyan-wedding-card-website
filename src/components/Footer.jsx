import React from 'react';
import { Ornament } from './ui';

export default function Footer() {
  return (
    <footer className="px-6 pt-6 pb-24 text-center">
      <img src="/images/flowers-top.png" alt="" className="watercolor mx-auto w-full" />
      <p className="mt-2 font-serif text-lg italic text-muted">With best compliments from,</p>
      <p className="mt-1 font-serif text-3xl">Khadija Arman Ali Joad</p>
      <p className="mt-1 font-serif text-[15px] italic text-muted">Joad Family, Friends &amp; Relatives</p>

      <Ornament className="my-8" />

      <p className="font-serif text-4xl text-gold">
        A <span className="italic">&amp;</span> M
      </p>
      <p className="eyebrow mt-2 text-muted">07 · 11 · 2026</p>
    </footer>
  );
}
