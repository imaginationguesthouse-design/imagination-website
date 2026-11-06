import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { guestHouse } from '@/data/guestHouse';

export function ExploreAround() {
  const { nearby, matrimandir } = guestHouse;
  const MatrimandirIcon = matrimandir.icon;

  return (
    <section id="explore" className="scroll-mt-24 overflow-hidden bg-sand-200/60 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Nearby"
          title="Explore around Auroville"
          description="Quiet gardens, handmade music, good food and a calm beach, all a short ride from your hut. Distances and times are from the guest house by scooter or bike."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {nearby.map(({ title, line, chip, hours, icon: Icon }) => (
            <li
              key={title}
              className="group flex min-w-0 flex-col gap-4 rounded-3xl border border-forest-800/10 bg-sand-50 p-5 transition duration-500 hover:-translate-y-1 hover:border-brass-500/60 hover:shadow-[0_24px_40px_-24px_rgba(16,35,27,0.45)] sm:gap-5 sm:p-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-800 text-brass-300 transition duration-500 group-hover:rotate-6 group-hover:bg-brass-500 group-hover:text-forest-900">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-forest-900 sm:text-xl">{title}</h3>
                <p className="text-sm leading-[1.5] text-forest-800 sm:text-base">{line}</p>
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <span className="inline-flex w-fit items-center rounded-full bg-forest-800/5 px-3 py-1.5 text-xs font-medium tracking-wide text-brass-700">
                  {chip}
                </span>
                <p className="text-xs leading-[1.5] text-forest-700">{hours}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="glass-card mt-6 p-6 sm:mt-8 sm:p-8">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-800 text-brass-300">
                <MatrimandirIcon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl text-forest-900">Planning to visit the Matrimandir Inner Chamber?</h3>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-brass-700">
                  Just 5 km (about 14 mins by scooter) from the guesthouse.
                </p>
              </div>
            </div>
            <p className="text-base leading-[1.5] text-forest-800">
              Advance booking is mandatory. Please reserve at least 4–5 days before your visit.
            </p>
            <a
              href={matrimandir.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <ExternalLink className="h-4 w-4" />
              Register for Matrimandir Inner Chamber visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
