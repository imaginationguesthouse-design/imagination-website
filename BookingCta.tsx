import { MessageCircle } from 'lucide-react';
import { guestHouse } from '@/data/guestHouse';

export function BookingCta() {
  return (
    <section id="book" className="scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-forest-800 px-5 py-12 text-center shadow-[0_40px_80px_-40px_rgba(16,35,27,0.9)] sm:rounded-[32px] sm:px-16 sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brass-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brass-300/10 blur-3xl" />

        <div className="relative flex flex-col items-center gap-6">
          <span className="eyebrow !text-brass-300">Ready when you are</span>
          <h2 className="max-w-3xl text-4xl text-sand-50 sm:text-6xl">
            Your thatched hut is waiting for you
          </h2>
          <p className="max-w-xl text-base leading-[1.5] text-sand-200 sm:text-lg">
            Message us on WhatsApp to check availability, ask about rates or reserve your hut. A member of our team replies personally.
          </p>

          <a
            href={guestHouse.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 !px-10 !py-5 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            Book your hut on WhatsApp
          </a>

          <a
            href={guestHouse.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm text-sand-200 underline-offset-4 transition hover:text-brass-300 hover:underline"
          >
            Contact us: {guestHouse.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
