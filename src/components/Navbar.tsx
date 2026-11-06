import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AuthModal, type AuthMode } from '@/components/auth/AuthModal';
import { guestHouse } from '@/data/guestHouse';

const NAV_LINKS = [
  { label: 'Your Hut', href: '#hut' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Access', href: '#access' },
  { label: 'Check In', href: '#check-in' },
  { label: 'Reviews', href: '#reviews' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  const handleLogout = () => {
    setOpen(false);
    setLoggedIn(false);
  };

  const handleAuthSubmit = () => {
    setLoggedIn(true);
    setAuthMode(null);
  };
  const textTone = solid ? 'text-forest-900' : 'text-sand-50';

  const authLink = (
    <li>
      <button
        type="button"
        onClick={loggedIn ? handleLogout : () => setAuthMode('login')}
        className={`group relative text-sm font-medium uppercase tracking-[0.16em] transition duration-300 hover:text-brass-700 ${textTone}`}
      >
        {loggedIn ? 'Log out' : 'Login'}
        <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-brass-500 transition duration-500 group-hover:scale-x-100" />
      </button>
    </li>
  );

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-forest-800/10 bg-sand-50/95 py-3 shadow-[0_10px_30px_-20px_rgba(16,35,27,0.4)] backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#top" className="flex shrink-0 items-center transition duration-300">
          <img
            src="/Untitled_Design-removebg-preview.png"
            alt={guestHouse.name}
            className={`h-12 w-auto transition duration-500 sm:h-14 ${solid ? '' : 'brightness-0 invert'}`}
          />
        </a>

        <ul className="hidden items-center gap-7 whitespace-nowrap lg:flex xl:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative text-sm font-medium uppercase tracking-[0.16em] transition duration-300 ${textTone}`}
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-brass-500 transition duration-500 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
          {authLink}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition duration-300 lg:hidden ${
            solid ? 'border-forest-800/20 text-forest-900' : 'border-sand-50/40 text-sand-50'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-sand-50 transition-all duration-500 lg:hidden ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-8 pt-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-forest-800/10 py-4 font-display text-2xl text-forest-900"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={loggedIn ? handleLogout : () => setAuthMode('login')}
            className="mt-3 rounded-full border border-forest-800/20 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-forest-900 transition hover:border-brass-500 hover:text-brass-700"
          >
            {loggedIn ? 'Log out' : 'Login'}
          </button>
        </div>
      </div>
    </header>
      {authMode && (
        <AuthModal initialMode={authMode} onClose={() => setAuthMode(null)} onSubmit={handleAuthSubmit} />
      )}
    </>
  );
}
