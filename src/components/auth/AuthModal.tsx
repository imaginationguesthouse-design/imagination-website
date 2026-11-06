import { useEffect, useState, type FormEvent } from 'react';
import { X } from 'lucide-react';

export type AuthMode = 'login' | 'signup';

type AuthModalProps = {
  initialMode: AuthMode;
  onClose: () => void;
  onSubmit: () => void;
};

const COPY: Record<AuthMode, { title: string; submit: string; switchLabel: string; switchAction: string }> = {
  login: {
    title: 'Welcome back',
    submit: 'Log in',
    switchLabel: 'New to the guest house?',
    switchAction: 'Create an account',
  },
  signup: {
    title: 'Create your account',
    submit: 'Sign up',
    switchLabel: 'Already have an account?',
    switchAction: 'Log in',
  },
};

export function AuthModal({ initialMode, onClose, onSubmit }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const copy = COPY[mode];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const switchMode = () => {
    setMode((current) => (current === 'login' ? 'signup' : 'login'));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-900/60 p-4 backdrop-blur-sm animate-fadeIn"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className="relative w-full max-w-md rounded-[28px] bg-sand-50 p-8 shadow-[0_40px_80px_-30px_rgba(16,35,27,0.7)] sm:p-10 animate-fadeUp"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-forest-800 transition hover:bg-forest-800/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="eyebrow">The Imagination Guest House</span>
        <h2 id="auth-modal-title" className="mt-3 text-4xl">
          {copy.title}
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-1 rounded-full bg-sand-200 p-1" role="tablist">
          {(['login', 'signup'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={mode === tab}
              onClick={() => mode !== tab && switchMode()}
              className={`rounded-full py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition duration-300 ${
                mode === tab ? 'bg-forest-800 text-sand-50 shadow-md' : 'text-forest-700 hover:text-forest-900'
              }`}
            >
              {tab === 'login' ? 'Log in' : 'Sign up'}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-forest-800">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className="rounded-2xl border border-forest-800/20 bg-white px-4 py-3.5 text-base text-forest-900 placeholder:text-forest-700/50 transition focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-300"
              placeholder="you@example.com"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-forest-800">Password</span>
            <input
              type="password"
              name="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              required
              className="rounded-2xl border border-forest-800/20 bg-white px-4 py-3.5 text-base text-forest-900 placeholder:text-forest-700/50 transition focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-300"
              placeholder="Your password"
            />
          </label>

          <button type="submit" className="btn-primary mt-2 w-full">
            {copy.submit}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-forest-700">
          {copy.switchLabel}{' '}
          <button type="button" onClick={switchMode} className="font-medium text-brass-700 underline-offset-4 hover:underline">
            {copy.switchAction}
          </button>
        </p>
      </div>
    </div>
  );
}
