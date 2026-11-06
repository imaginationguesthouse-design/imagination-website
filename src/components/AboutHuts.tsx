import { useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Home, BrickWall, TreePine, Palmtree } from 'lucide-react';

type MaterialCard = {
  title: string;
  line: string;
  photo: string;
  alt: string;
  icon: typeof Home;
};

const CARDS: MaterialCard[] = [
  {
    title: 'Thatched roof',
    line: 'A layer of palm leaves topped with thick grass thatch, about half a foot deep, keeps the hut naturally cool under the Tamil sun.',
    photo: '/thatch.jpg',
    alt: 'Close-up of palm leaf and grass thatch on a traditional roof',
    icon: Home,
  },
  {
    title: 'Solid brick walls',
    line: 'Strong brick walls set in a mix of cement and red sand give the hut warmth, strength and an earthy feel.',
    photo: '/brick.jpg',
    alt: 'Red brick wall with natural texture',
    icon: BrickWall,
  },
  {
    title: 'Timber beams and frames',
    line: 'Exposed wooden beams give each hut its warm, grounded character.',
    photo: '/beams.jpg',
    alt: 'Rustic wooden beams under a ceiling',
    icon: TreePine,
  },
  {
    title: 'Natural surroundings',
    line: 'Gardens grow right up to your door, with birdsong in place of traffic.',
    photo: '/garden.jpg',
    alt: 'Lush green tropical garden in South India',
    icon: Palmtree,
  },
];

export function AboutHuts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = (index + CARDS.length) % CARDS.length;
    const card = container.children[clamped] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: 'smooth' });
    }
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth / visibleCards(container.offsetWidth);
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(CARDS.length - 1, index)));
  }, []);

  return (
    <section id="about" className="scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-4 items-center text-center">
          <span className="eyebrow">The Huts</span>
          <h2 className="text-4xl sm:text-5xl">Built by hand. Rooted in Tamil tradition.</h2>
          <p className="max-w-[680px] text-base leading-[1.5] text-forest-700 sm:text-lg">
            Our huts are built the way Tamil villages have built homes for generations: a steep thatched roof, thick walls and timber beams, all shaped by hand with ancestral techniques. Nothing here is rushed or mass-made. Every roof line and every doorway was crafted slowly, with respect for the land.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-14">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
          >
            {CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="group relative flex shrink-0 snap-start overflow-hidden rounded-3xl border border-forest-800/10 shadow-[0_20px_50px_-30px_rgba(16,35,27,0.35)] aspect-[4/5] w-[78%] sm:aspect-[3/4] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                >
                  <img
                    src={card.photo}
                    alt={card.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/25 to-forest-900/10" />
                  <div className="absolute inset-0 bg-forest-900/10" />
                  <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-brass-500 text-forest-900">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="text-xl text-sand-50 sm:text-2xl">{card.title}</h3>
                    <p className="mt-2 text-sm leading-[1.5] text-sand-200/90">{card.line}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-forest-800 text-brass-300 shadow-lg transition hover:bg-brass-500 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-300"
            aria-label="Previous card"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-forest-800 text-brass-300 shadow-lg transition hover:bg-brass-500 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-300"
            aria-label="Next card"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.6} />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {CARDS.map((card, i) => (
            <button
              key={card.title}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-7 bg-brass-400' : 'w-1.5 bg-forest-800/20 hover:bg-forest-800/40'
              }`}
              aria-label={`Go to ${card.title}`}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 sm:mt-16">
          <p className="max-w-[680px] text-center text-lg leading-[1.6] text-forest-700 sm:text-xl">
            Step inside and the air changes. It is cool, quiet and softly lit, with sunlight filtering through the thatch and wooden beams rising above you. Climb to the loft bed beneath its mosquito net, step out onto your private balcony, and let the rustle of leaves and birds replace the noise of the day. It feels less like a hotel room and more like a treehouse built from heritage.
          </p>
          <p className="text-center text-lg italic text-brass-700 sm:text-xl">
            Come for the huts. Stay for the stillness.
          </p>
        </div>
      </div>
    </section>
  );
}

function visibleCards(width: number): number {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1.28;
}
