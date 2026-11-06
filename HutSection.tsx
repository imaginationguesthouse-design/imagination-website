import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Lightbox, type GalleryImage } from '@/components/Lightbox';
import { guestHouse } from '@/data/guestHouse';

const galleryImages: GalleryImage[] = [
  { src: '/Bed.jpg', alt: 'Bed in the hut loft' },
  { src: '/Bed1.jpg', alt: 'Second bed on the floor' },
  { src: '/Interior1.jpg', alt: 'Hut interior' },
  { src: '/Interior2.jpg', alt: 'Hut interior details' },
  { src: '/Balcony.jpg', alt: 'Private hut balcony' },
  { src: '/Bathroom.jpg', alt: 'Attached bathroom with built-in water heater' },
  { src: '/Interior.jpg', alt: 'Hut interior view' },
];

const layoutClass = (index: number) =>
  index === 0 ? 'col-span-2 h-56 sm:h-72' : 'h-40 sm:h-52';

export function HutSection() {
  const { hut } = guestHouse;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="hut" className="scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Your hut"
          title="A closer look at your stay"
          description="Explore the spaces, details, and comforts waiting inside your hut."
        />

        <div className="mt-10 grid min-w-0 gap-10 sm:mt-14 lg:grid-cols-[1.55fr_1fr] lg:items-center lg:gap-14">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setLightboxIndex(index)}
                className={`group relative block w-full overflow-hidden rounded-xl ${layoutClass(index)}`}
                aria-label={`Open ${image.alt} in full view`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-forest-900/0 to-transparent opacity-90" />
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-forest-900/50 text-sand-50 opacity-0 backdrop-blur-sm transition duration-500 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <span className="absolute inset-x-0 bottom-0 truncate p-3 text-left text-xs font-medium tracking-wide text-sand-50">
                  {image.alt}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-3xl sm:text-4xl">{hut.name}</h3>

            <ul className="flex flex-col divide-y divide-forest-800/10 border-y border-forest-800/10">
              {hut.features.map(({ title, description, icon: Icon }) => (
                <li key={title} className="group flex gap-4 py-5">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-800 text-brass-300 transition duration-500 group-hover:bg-brass-500 group-hover:text-forest-900">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-brass-700">{title}</span>
                    <p className="text-base leading-[1.5] text-forest-800">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
