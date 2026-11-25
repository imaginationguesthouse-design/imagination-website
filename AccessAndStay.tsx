import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, LogIn, LogOut, X, type LucideIcon } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { guestHouse } from '@/data/guestHouse';

const SHARED_PHOTOS = [
  { src: '/Commomkitchen.jpg', alt: 'Common kitchen' },
  { src: '/Commondiningtable.jpg', alt: 'Common dining table' },
  { src: '/commondiningtable1.jpeg', alt: 'Guests enjoying a meal at the common dining table' },
  { src: '/commondiningtable2.jpeg', alt: 'Family dining together in the shared kitchen area' },
];

export function AccessAndStay() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % SHARED_PHOTOS.length));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + SHARED_PHOTOS.length) % SHARED_PHOTOS.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const activePhoto = lightboxIndex !== null ? SHARED_PHOTOS[lightboxIndex] : null;

  return (
    <section id="access" className="scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid min-w-0 gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Guest access"
              title="Shared campus facilities"
              description="Facilities across the campus that you are welcome to use during your stay."
            />
            <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
              {guestHouse.campusFacilities.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="group flex min-w-0 items-center gap-3 rounded-2xl border border-forest-800/10 bg-sand-50 px-4 py-4 transition duration-500 hover:border-brass-500/60 hover:shadow-[0_20px_36px_-24px_rgba(16,35,27,0.45)] sm:gap-4 sm:px-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brass-500/50 text-brass-700 transition duration-500 group-hover:bg-brass-500 group-hover:text-forest-900">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0 text-sm leading-[1.4] text-forest-900 sm:text-base">{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4" aria-label="Shared space photos">
              {SHARED_PHOTOS.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-forest-800/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500"
                  aria-label={`View full photo: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-900/60 to-transparent px-3 py-2 text-right text-[11px] text-sand-100 opacity-0 transition duration-300 group-hover:opacity-100">
                    Tap to view
                  </span>
                </button>
              ))}
            </div>

            <p className="mt-8 max-w-2xl text-base leading-[1.5] text-forest-700 sm:text-lg">
              Our common kitchen, fridge and washing machine are yours to use throughout your stay. Just make yourself at home.
            </p>
          </div>

          <div id="check-in" className="scroll-mt-24 flex flex-col gap-8">
            <SectionHeading
              eyebrow="Check-in and check-out"
              title="Times and house rules"
              description="Plan your arrival and departure with these times, and keep these rules in mind during your stay."
            />

            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
              <TimeCard label="Check-in from" time={guestHouse.checkIn.time} icon={LogIn} accent />
              <TimeCard label="Check-out by" time={guestHouse.checkOut.time} icon={LogOut} />
            </div>

            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-2xl">House rules</h3>
              <dl className="mt-5 flex flex-col gap-6">
                {guestHouse.houseRules.map((rule) => (
                  <div key={rule.label} className="flex flex-col gap-1.5">
                    <dt className="text-xs font-medium uppercase tracking-[0.18em] text-brass-700">{rule.label}</dt>
                    <dd className="text-base leading-[1.5] text-forest-800">{rule.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-900/90 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-forest-800/90 text-sand-50 transition hover:bg-brass-500 hover:text-forest-900"
            aria-label="Close photo viewer"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + SHARED_PHOTOS.length) % SHARED_PHOTOS.length);
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-forest-800/90 text-brass-300 transition hover:bg-brass-500 hover:text-forest-900 sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
          </button>

          <div
            className="relative flex max-h-[85vh] max-w-4xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <p className="text-xs tracking-wide text-sand-200/90">
              {lightboxIndex + 1} / {SHARED_PHOTOS.length} — {activePhoto.alt}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % SHARED_PHOTOS.length);
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-forest-800/90 text-brass-300 transition hover:bg-brass-500 hover:text-forest-900 sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>
      )}
    </section>
  );
}

type TimeCardProps = {
  label: string;
  time: string;
  icon: LucideIcon;
  accent?: boolean;
};

function TimeCard({ label, time, icon: Icon, accent = false }: TimeCardProps) {
  return (
    <div
      className={`flex min-w-0 flex-col gap-4 rounded-3xl p-5 transition duration-500 hover:-translate-y-1 sm:gap-5 sm:p-7 ${
        accent
          ? 'bg-forest-800 text-sand-50 shadow-[0_30px_50px_-30px_rgba(16,35,27,0.8)]'
          : 'border border-forest-800/10 bg-sand-50 text-forest-800 shadow-[0_20px_40px_-30px_rgba(16,35,27,0.35)]'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium uppercase tracking-[0.2em] ${accent ? 'text-brass-300' : 'text-brass-700'}`}>
          {label}
        </span>
        <Icon className={`h-5 w-5 ${accent ? 'text-brass-300' : 'text-brass-700'}`} strokeWidth={1.6} />
      </div>
      <p className={`font-display text-5xl font-medium ${accent ? 'text-sand-50' : 'text-forest-900'}`}>{time}</p>
    </div>
  );
}
