import { useEffect, useRef } from 'react';
import { SectionHeading } from '@/components/SectionHeading';

const REVIEW_WIDGET_SCRIPT = 'https://widgets.sociablekit.com/google-reviews/widget.js';

export function GuestExperiences() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = REVIEW_WIDGET_SCRIPT;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="reviews" className="scroll-mt-24 overflow-hidden bg-sand-200/60 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Guest experiences"
          title="Reviews from our guests"
          description="See what guests have shared about their stay at The Imagination Guest House."
        />
        <div className="mt-10 w-full min-w-0 overflow-hidden rounded-3xl bg-sand-50 p-4 shadow-[0_20px_50px_-30px_rgba(16,35,27,0.35)] sm:mt-14 sm:p-8">
          <div ref={widgetRef} className="sk-ww-google-reviews" data-embed-id="25726944" />
        </div>
      </div>
    </section>
  );
}
