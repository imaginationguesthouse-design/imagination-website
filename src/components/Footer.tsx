import { guestHouse } from '@/data/guestHouse';

const FOOTER_LINKS = [
  { label: 'Your hut', href: '#hut' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Access', href: '#access' },
  { label: 'Check-in', href: '#check-in' },
  { label: 'Book', href: '#book' },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 px-4 py-12 text-sand-200 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <img
            src="/Untitled_Design-removebg-preview.png"
            alt={guestHouse.name}
            className="h-14 w-auto brightness-0 invert"
          />
          <span className="text-sm text-sand-300">{guestHouse.location}</span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-[0.16em]">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brass-300">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-sand-300">
          &copy; {new Date().getFullYear()} {guestHouse.name}
        </p>
      </div>
    </footer>
  );
}
