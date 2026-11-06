import { MessageCircle } from 'lucide-react';
import { guestHouse } from '@/data/guestHouse';

export function FloatingWhatsApp() {
  return (
    <a
      href={guestHouse.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Imagination Guest House on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brass-500 text-forest-900 shadow-[0_18px_40px_-12px_rgba(184,137,79,0.9)] transition duration-500 hover:-translate-y-1 hover:bg-brass-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-300 focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brass-500/40" />
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
    </a>
  );
}
