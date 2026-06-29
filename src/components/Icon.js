import React from 'react';

/**
 * Lightweight inline icon set — single 1.75 stroke weight, currentColor.
 * Phosphor-style geometry, kept local to avoid a runtime dependency.
 */
const PATHS = {
  trend: 'M4 17l5-5 4 4 7-8 M16 8h4v4',
  swap: 'M4 9l3-3 3 3 M7 6v9 M20 15l-3 3-3-3 M17 18V9',
  fund: 'M4 19V5 M9 19v-8 M14 19v-5 M19 19V8',
  pulse: 'M3 12h4l2-6 3 12 2-6h7',
  bolt: 'M13 3L5 13h6l-1 8 8-10h-6z',
  link: 'M9 15l6-6 M10 6l1-1a4 4 0 015 5l-1 1 M14 18l-1 1a4 4 0 01-5-5l1-1',
  chat: 'M4 5h16v11H8l-4 4z',
  book: 'M5 4h11a3 3 0 013 3v13H8a3 3 0 00-3 3z M5 4v16',
  briefcase: 'M4 8h16v11H4z M9 8V6h6v2',
  spark: 'M12 3v6 M12 15v6 M3 12h6 M15 12h6',
};

export default function Icon({ name, size = 28, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
