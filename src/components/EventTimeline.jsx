import React from 'react';
import { Reveal, SectionTitle } from './ui';

const events = [
  {
    arabic: 'عقد النكاح',
    title: 'Nikah',
    day: 'Saturday',
    date: '07 November 2026',
    time: '10:00 PM onwards',
    venue: 'Near City Centre Market',
    address: 'Fatehpur, Shekhawati',
  },
  {
    arabic: 'دعوة وليمة',
    title: 'Walima',
    day: 'Sunday',
    date: '08 November 2026',
    time: '12:00 PM onwards',
    venue: 'Joad House',
    address: 'Bilal Masjid Nari, Fatehpur, Shekhawati',
  },
];

export default function EventTimeline() {
  return (
    <section className="bg-cream px-5 py-16">
      <SectionTitle eyebrow="Save the dates" title="Wedding Events" />

      <div className="space-y-20 pt-10">
        {events.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <article className="relative rounded-3xl border border-line bg-paper px-6 pt-32 pb-10 text-center shadow-[0_10px_40px_rgba(90,60,20,0.06)]">
              <img
                src="/images/flowers-top.png"
                alt=""
                className="watercolor absolute -top-14 left-1/2 w-[78%] -translate-x-1/2"
              />
              <p className="font-arabic text-2xl text-gold" dir="rtl">{e.arabic}</p>
              <h3 className="font-serif text-[34px] leading-tight">{e.title}</h3>

              <div className="mx-auto my-5 h-px w-16 bg-gold/40" />

              <p className="eyebrow text-muted">{e.day}</p>
              <p className="mt-1 font-serif text-2xl">{e.date}</p>
              <p className="mt-0.5 text-sm text-muted">{e.time}</p>

              <div className="mx-auto my-5 h-px w-16 bg-gold/40" />

              <p className="eyebrow text-gold">Venue</p>
              <p className="mt-2 font-serif text-2xl leading-tight">{e.venue}</p>
              <p className="mx-auto mt-1 max-w-[260px] text-sm leading-relaxed text-muted">{e.address}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
