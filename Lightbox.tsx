import { useCallback, useEffect, useState } from 'react';
import { ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

export type GalleryImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);

  const isOpen = index !== null;

  const resetTransforms = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
    resetTransforms();
  }, [index, images.length, onIndexChange, resetTransforms]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
    resetTransforms();
  }, [index, images.length, onIndexChange, resetTransforms]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(z + 0.5, 4));
      if (e.key === '-') setZoom((z) => Math.max(z - 0.5, 1));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  useEffect(() => {
    resetTransforms();
  }, [index, resetTransforms]);

  if (!isOpen || index === null) return null;

  const current = images[index];

  const handlePointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragStart) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handlePointerUp = () => setDragStart(null);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-forest-900/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div className="flex items-center justify-between px-3 py-3 text-sand-50 sm:px-6 sm:py-4" onClick={(e) => e.stopPropagation()}>
        <p className="hidden max-w-[55%] truncate text-sm font-medium tracking-wide text-sand-100/90 sm:block">
          {current.alt}
        </p>
        <div className="flex items-center gap-2 sm:gap-3 sm:ml-auto">
          <div className="flex items-center gap-1 rounded-full bg-white/10 px-1 py-1">
            <button
              onClick={() => setZoom((z) => Math.max(z - 0.5, 1))}
              disabled={zoom <= 1}
              className="flex h-9 w-9 items-center justify-center rounded-full text-sand-50 transition hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="Zoom out"
            >
              <ZoomOut className="h-5 w-5" strokeWidth={1.6} />
            </button>
            <span className="min-w-[3rem] text-center text-xs font-medium tabular-nums text-sand-100/80">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(z + 0.5, 4))}
              disabled={zoom >= 4}
              className="flex h-9 w-9 items-center justify-center rounded-full text-sand-50 transition hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-5 w-5" strokeWidth={1.6} />
            </button>
            <button
              onClick={resetTransforms}
              disabled={zoom === 1 && pan.x === 0 && pan.y === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full text-sand-50 transition hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" strokeWidth={1.6} />
            </button>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sand-50 transition hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          src={current.src}
          alt={current.alt}
          draggable={false}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full select-none rounded-lg object-contain transition-transform duration-150 ease-out"
          style={{
            transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
            cursor: zoom > 1 ? (dragStart ? 'grabbing' : 'grab') : 'default',
          }}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-sand-50 transition hover:bg-white/25 sm:left-6"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={1.6} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-sand-50 transition hover:bg-white/25 sm:right-6"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={1.6} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 pb-5" onClick={(e) => e.stopPropagation()}>
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => onIndexChange(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-7 bg-brass-400' : 'w-1.5 bg-sand-50/40 hover:bg-sand-50/70'
            }`}
            aria-label={`View ${img.alt}`}
          />
        ))}
      </div>
    </div>
  );
}
