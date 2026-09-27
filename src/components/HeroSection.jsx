import React from 'react';
import { Reveal } from './ui';

const couple = [
  {
    role: 'The Groom',
    name: 'Sufiyan Joad',
    relation: 'Son of',
    parents: ['Mr. Mohd Abbas Joad', 'Mrs. Shabana Joad'],
  },
  {
    role: 'The Bride',
    name: 'Namira Bains',
    relation: 'Daughter of',
    parents: ['Mr. Gulam Nabi Bains', 'Mrs. Shabnam Bains'],
  },
];

const events = [
  { title: 'Nikkah', date: '16', day: 'Monday', time: '8:00 PM' },
  { title: 'Walima', date: '17', day: 'Tuesday', time: '2:00 PM' },
];

function Person({ role, name, relation, parents }) {
  return (
    <div>
      <p className="eyebrow text-[10px] text-[#E8CF9A]">{role}</p>
      <h1 className="mt-1 font-serif text-[32px] leading-tight text-white">{name}</h1>
      <p className="font-serif text-[13px] italic text-white/60">{relation}</p>
      <p className="font-serif text-[15px] leading-snug text-white/85">
        {parents[0]}
        <br />
        <span className="italic text-[#E8CF9A]">&amp;</span> {parents[1]}
      </p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
    <section className="relative isolate pb-14 text-center" style={{ clipPath: 'inset(0)' }}>
      {/* clip-path confines the fixed layer to this section; background-attachment: fixed is broken on iOS */}
      {/* h-lvh stays constant while the mobile address bar collapses, so bg-cover doesn't rescale */}
      <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-lvh w-full max-w-[440px] -translate-x-1/2">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/palace.png)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(30,18,8,0.55) 0%, rgba(30,18,8,0.3) 18%, rgba(30,18,8,0.15) 35%, rgba(30,18,8,0.2) 65%, rgba(30,18,8,0.45) 100%)',
          }}
        />
      </div>

      <Reveal className="px-6 pt-10 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
        <p className="font-arabic text-[26px] leading-loose text-[#E8CF9A]" dir="rtl">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <p className="font-serif text-[15px] italic text-white/80">
          In the name of Allah, the Most Gracious, the Most Merciful
        </p>
      </Reveal>

      <div className="relative mt-20 px-7">
        <Reveal delay={0.2}>
          <div className="relative rounded-t-[160px] rounded-b-3xl border border-white/40 bg-black/15 px-5 pt-24 pb-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop-blur-[6px] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute inset-1.5 rounded-t-[154px] rounded-b-[20px] border border-[#E8CF9A]/30" />

            <img
              src="/images/flowers-top-cut.png"
              alt=""
              className="pointer-events-none absolute top-0 left-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            />

            <p className="eyebrow text-[10px] text-white/75">Together with their families</p>
            <p className="mt-1.5 font-serif text-[15px] italic leading-snug text-white/70">
              invite you to the Nikkah &amp; Walima of
            </p>

            <div className="my-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#E8CF9A]/50" />
              <span className="size-1.5 rotate-45 bg-[#E8CF9A]" />
              <span className="h-px w-10 bg-[#E8CF9A]/50" />
            </div>

            <Person {...couple[0]} />

            <div className="my-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#E8CF9A]/50" />
              <span className="font-serif text-3xl italic leading-none text-[#E8CF9A]">&amp;</span>
              <span className="h-px w-10 bg-[#E8CF9A]/50" />
            </div>

            <Person {...couple[1]} />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="pt-12 pb-10 text-center">
      <Reveal delay={0.1} className="px-6">
        <div className="grid grid-cols-2 divide-x divide-gold/30">
          {events.map((e) => (
            <div key={e.title}>
              <p className="font-serif text-2xl italic text-ink">{e.title}</p>
              <p className="mt-1 font-serif text-6xl leading-none text-gold">{e.date}</p>
              <p className="eyebrow mt-3 text-ink">{e.day}</p>
              <p className="mt-1 text-sm text-muted">{e.time}</p>
            </div>
          ))}
        </div>
        <p className="eyebrow mt-6 text-muted">November 2026</p>
      </Reveal>
    </section>
    </>
  );
}
