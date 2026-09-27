import React from 'react';
import { Ornament, Reveal, SectionTitle } from './ui';

const elders = [
  { name: 'Mohd Yunus Joad', relation: 'Elder uncle of the groom' },
  { name: 'Mohd Abbas Joad', relation: 'Father of the groom' },
  { name: 'Mohd Yusuf Joad', relation: 'Younger uncle of the groom' },
];

export default function CoupleSection() {
  return (
    <section className="px-5 pt-6 pb-12 text-center">
      <SectionTitle eyebrow="Our Family" title="With love & blessings" />

      <Reveal>
        <p className="eyebrow text-gold">With the blessings of</p>
        <p className="mt-3 font-serif text-[28px] leading-tight">Late Mr. Mushtaq Joad</p>
        <p className="mt-1 font-serif text-[15px] italic text-muted">Grandfather of the groom &middot; Marhoom</p>
      </Reveal>

      <Ornament className="my-8" />

      <Reveal>
        <p className="eyebrow text-gold">Awaiting your presence</p>
        <div className="mt-4 space-y-4">
          {elders.map((e) => (
            <div key={e.name}>
              <p className="font-serif text-[24px] leading-tight">{e.name}</p>
              <p className="font-serif text-[15px] italic text-muted">{e.relation}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <p className="font-arabic text-2xl text-gold" dir="rtl">وَخَلَقْنَاكُمْ أَزْوَاجًا</p>
        <p className="mt-2 font-serif text-lg italic">&ldquo;And We created you in pairs.&rdquo;</p>
        <p className="eyebrow mt-2 text-muted">Qur&rsquo;an 78:8</p>
      </Reveal>
    </section>
  );
}
