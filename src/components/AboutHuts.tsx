import { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, BrickWall, TreePine, Palmtree } from 'lucide-react';

type MaterialCard = {
  title: string;
  line: string;
  photos: string[];
  alt: string;
  icon: typeof Home;
};

const CARDS: MaterialCard[] = [
  {
    title: 'Double-layered thatched roof',
    line: 'Built in two layers for naturally cooler temperatures: a woven inner layer of coconut leaves topped with half a foot of thick grass thatch to insulate the hut from the Tamil sun.',
    photos: ['/roofoutside.jpeg', '/roofinside.jpeg'],
    alt: 'Double-layered coconut leaf and thick grass thatched roof',
    icon: Home,
  },
  {
    title: 'Compressed earth block walls',
    line: 'Built with unfired compressed stabilized earth blocks instead of kiln-fired bricks, these eco-friendly walls lower environmental impact while naturally regulating humidity and keeping interiors cool.',
    photos: ['/wall.jpeg'],
    alt: 'Compressed stabilized earth block wall with natural earthy texture',
    icon: BrickWall,
  },
  {
    title: 'Tree kazhi frame & wooden loft',
    line: 'Sturdy natural tree poles (kazhi) form the sweeping roof frame overhead, paired with warm solid wood flooring across the upper loft bed area.',
    photos: ['/kazhiframe.png', '/loft.jpeg'],
    alt: 'Natural tree kazhi roof frame and solid wood loft floor',
    icon: TreePine,
  },
  {
    title: 'Natural surroundings',
    line: 'Gardens grow right up to your door, with birdsong in place of traffic.',
    photos: ['/surrounding.jpeg'],
    alt: 'Lush green natural garden surroundings around the eco-friendly huts',
    icon: Palmtree,
  },
];

function MaterialCardItem({ card }: { card: MaterialCard }) {
  const Icon = card.icon;
  const [photoIndex, setPhotoIndex] = useState(0);
  const hasMultiplePhotos = card.photos.length > 1;

  useEffect(() => {
    if (!hasMultiplePhotos) return;
    const timer = window.setTimeout(() => {
      setPhotoIndex((prev) => (prev + 1) % card.photos.length);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [hasMultiplePhotos, card.photos.length, photoIndex]);

  const handleCardTap = () => {
    if (!hasMultiplePhotos) return;
    setPhotoIndex((prev) => (prev + 1) % card.photos.length);
  };

  return (
    <article
      onClick={handleCardTap}
      className={`group relative flex shrink-0 snap-start overflow-hidden rounded-3xl border border-forest-800/10 shadow-[0_20px_50px_-30px_rgba(16,35,27,0.35)] aspect-[4/5] w-[78%] sm:aspect-[3/4] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] ${
        hasMultiplePhotos ? 'cursor-pointer select-none' : ''
      }`}
    >
      {card.photos.length > 0 ? (
        card.photos.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={card.alt}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              idx === photoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-forest-800 via-forest-900 to-forest-800">
          <Icon className="h-24 w-24 text-brass-300/15" strokeWidth={1.1} />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/25 to-forest-900/10" />
      <div className="absolute inset-0 bg-forest-900/10" />

      {hasMultiplePhotos && (
        <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-sand-200/20 bg-forest-900/65 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[11px] font-medium tracking-wide text-sand-100">
            {photoIndex + 1}/{card.photos.length}
          </span>
          <div className="flex items-center gap-1">
            {card.photos.map((src, idx) => (
              <button
                key={src}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPhotoIndex(idx);
                }}
                aria-label={`View photo ${idx + 1} of ${card.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === photoIndex ? 'w-4 bg-brass-400' : 'w-1.5 bg-sand-200/50 hover:bg-sand-200/80'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative flex h-full w-full flex-col justify-end p-5 sm:p-6">
        <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-brass-500 text-forest-900">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <h3 className="text-xl text-sand-50 sm:text-2xl">{card.title}</h3>
        <p className="mt-2 text-sm leading-[1.5] text-sand-200/90">{card.line}</p>
      </div>
    </article>
  );
}

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
            Our eco-friendly huts are built the way Tamil villages have crafted sustainable homes for generations: a double-layered thatched roof, compressed earth block walls, and natural wooden frames, all shaped by hand with ancestral techniques. Nothing here is rushed or mass-made—every roof line and every doorway was crafted slowly as an eco-friendly house with respect for the land.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-14">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
          >
            {CARDS.map((card) => (
              <MaterialCardItem key={card.title} card={card} />
            ))}
          </div>

          {/* Desktop/laptop side arrows only */}
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-forest-800 text-brass-300 shadow-lg transition hover:bg-brass-500 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-300 md:flex"
            aria-label="Previous card"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-forest-800 text-brass-300 shadow-lg transition hover:bg-brass-500 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-300 md:flex"
            aria-label="Next card"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.6} />
          </button>
        </div>

        {/* Dots + mobile-only arrows below the cards */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-800 text-brass-300 shadow transition hover:bg-brass-500 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-300 md:hidden"
            aria-label="Previous card"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
          </button>

          <div className="flex items-center justify-center gap-2">
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

          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-800 text-brass-300 shadow transition hover:bg-brass-500 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-300 md:hidden"
            aria-label="Next card"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 sm:mt-16">
          <p className="max-w-[680px] text-center text-lg leading-[1.6] text-forest-700 sm:text-xl">
            Step inside our eco-friendly huts and the air changes. It is cool, quiet and softly lit, with sunlight filtering through the thatch and natural tree-pole frames rising above you. Climb up to the wooden loft bed beneath its mosquito net, step out onto your private balcony, and let the rustle of leaves and birds replace the noise of the day. It feels less like a hotel room and more like an eco-friendly treehouse built from heritage.
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
