import React from 'react';
import { Ornament, Reveal, SectionTitle } from './ui';

export default function CoupleSection() {
  return (
    <section className="px-5 pt-6 pb-12 text-center">
      <SectionTitle eyebrow="With compliments" title="With love & blessings" />

      <Reveal>
        <p className="eyebrow text-gold">With best compliments from</p>
        <p className="mt-3 font-serif text-[28px] leading-tight">Khadija Arman Ali Joad</p>
        <p className="mt-1 font-serif text-[15px] italic text-muted">Joad Family</p>
      </Reveal>

      <Ornament className="my-8" />

      <Reveal>
        <p className="eyebrow text-gold">Awaiting your presence</p>
        <p className="mt-3 font-serif text-[24px] leading-tight">Friends &amp; Relatives</p>
        <p className="mt-1 font-serif text-[15px] italic text-muted">of the Joad Family</p>
      </Reveal>

      <Reveal className="mt-12">
        <p className="font-arabic text-2xl text-gold" dir="rtl">وَخَلَقْنَاكُمْ أَزْوَاجًا</p>
        <p className="mt-2 font-serif text-lg italic">&ldquo;And We created you in pairs.&rdquo;</p>
        <p className="eyebrow mt-2 text-muted">Qur&rsquo;an 78:8</p>
      </Reveal>
    </section>
  );
}
