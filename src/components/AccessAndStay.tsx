import { LogIn, LogOut, type LucideIcon } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { guestHouse } from '@/data/guestHouse';

export function AccessAndStay() {
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

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4" aria-label="Shared space photos">
              <img src="/Commomkitchen.jpg" alt="Common kitchen" className="h-24 w-full rounded-xl object-cover sm:h-40" />
              <img src="/Commondiningtable.jpg" alt="Common dining table" className="h-24 w-full rounded-xl object-cover sm:h-40" />
              <img src="/Commondiningtable1.jpg" alt="Shared dining area" className="h-24 w-full rounded-xl object-cover sm:h-40" />
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
