import { ArrowDown, MessageCircle } from 'lucide-react';
import { guestHouse } from '@/data/guestHouse';

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={guestHouse.images.hero}
        alt="Thatched-roof guest huts beside a tropical garden at dusk"
        className="absolute inset-0 -z-20 h-full w-full animate-[fadeUp_1.6s_ease-out_both] object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-900/70 via-forest-900/30 to-forest-900/90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,35,27,0.85)_0%,_transparent_60%)]" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-36 lg:px-8 lg:pb-24">
        <div className="max-w-3xl animate-fadeUp">
          <span className="eyebrow !text-brass-300">Thatched roof huts in Irumbai</span>
          <h1 className="mt-6 max-w-full text-[2.8rem] leading-[1.05] text-sand-50 sm:text-7xl lg:text-8xl">
            The Imagination <span className="italic text-brass-300">Guest House</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-[1.5] text-sand-200 sm:text-lg">
            {guestHouse.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#hut" className="btn-outline">
              Explore your hut
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href={guestHouse.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>
        </div>

        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px sm:mt-16 overflow-hidden rounded-3xl border border-sand-50/15 bg-sand-50/10 backdrop-blur-md sm:grid-cols-3">
          <HeroFact label="Check-in" value={guestHouse.checkIn.time} />
          <HeroFact label="Check-out" value={guestHouse.checkOut.time} />
          <HeroFact label="Location" value={guestHouse.location} className="col-span-2 sm:col-span-1" />
        </dl>
      </div>
    </section>
  );
}

type HeroFactProps = {
  label: string;
  value: string;
  className?: string;
};

function HeroFact({ label, value, className = '' }: HeroFactProps) {
  return (
    <div className={`flex flex-col gap-1.5 bg-forest-900/40 p-5 sm:p-6 ${className}`}>
      <dt className="text-[0.68rem] uppercase tracking-[0.24em] text-brass-300">{label}</dt>
      <dd className="font-display text-2xl text-sand-50 sm:text-3xl">{value}</dd>
    </div>
  );
}
