import { SectionHeading } from '@/components/SectionHeading';
import { guestHouse } from '@/data/guestHouse';

export function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-24 overflow-hidden bg-sand-200/60 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Amenities"
          title="What every hut includes"
          description="The essentials that come with your stay, so you can switch off and simply enjoy."
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {guestHouse.amenities.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="group flex min-w-0 flex-col gap-4 rounded-3xl border border-forest-800/10 bg-sand-50 p-5 transition duration-500 hover:-translate-y-1 hover:border-brass-500/60 hover:shadow-[0_24px_40px_-24px_rgba(16,35,27,0.45)] sm:gap-5 sm:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-800 text-brass-300 transition duration-500 group-hover:rotate-6 group-hover:bg-brass-500 group-hover:text-forest-900">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="text-sm font-normal text-forest-900 sm:text-lg">{label}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-base leading-[1.5] text-forest-700 sm:mt-10 sm:text-lg">
          Start your morning slowly. Complimentary breakfast is served daily from 8:30 to 10:30 AM in our common kitchen, with freshly brewed tea or coffee.
        </p>
      </div>
    </section>
  );
}
