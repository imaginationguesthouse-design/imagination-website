import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light', children }: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : ''}`}>
      <span className={`eyebrow ${isDark ? '!text-brass-300' : ''}`}>{eyebrow}</span>
      <h2 className={`text-4xl sm:text-5xl ${isDark ? 'text-sand-50' : ''}`}>{title}</h2>
      {description && (
        <p className={`max-w-2xl text-base leading-[1.5] sm:text-lg ${isDark ? 'text-sand-200' : 'text-forest-700'}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
