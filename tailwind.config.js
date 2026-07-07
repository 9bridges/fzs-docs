/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Docusaurus toggles dark mode via [data-theme="dark"] on <html>, not Tailwind's default `.dark` class.
  darkMode: ['selector', '[data-theme="dark"]'],
  // Docusaurus/Infima already provides a base reset + design tokens.
  // Disabling preflight keeps Tailwind scoped to utility classes only,
  // so it can't clobber existing site-wide styles.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      // Mirrors the brand tokens defined in custom.css / DESIGN.md so
      // pages can use semantic classes (bg-brand, text-emphasis-600, ...)
      // instead of repeating var(--ifm-...) via arbitrary values.
      colors: {
        brand: {
          DEFAULT: 'var(--ifm-color-primary)',
          dark: 'var(--ifm-color-primary-dark)',
          darker: 'var(--ifm-color-primary-darker)',
          darkest: 'var(--ifm-color-primary-darkest)',
          light: 'var(--ifm-color-primary-light)',
          lighter: 'var(--ifm-color-primary-lighter)',
          lightest: 'var(--ifm-color-primary-lightest)',
        },
        surface: 'var(--ifm-background-surface-color)',
        heading: 'var(--ifm-heading-color)',
        emphasis: {
          100: 'var(--ifm-color-emphasis-100)',
          200: 'var(--ifm-color-emphasis-200)',
          300: 'var(--ifm-color-emphasis-300)',
          400: 'var(--ifm-color-emphasis-400)',
          500: 'var(--ifm-color-emphasis-500)',
          600: 'var(--ifm-color-emphasis-600)',
          700: 'var(--ifm-color-emphasis-700)',
          800: 'var(--ifm-color-emphasis-800)',
        },
      },
      boxShadow: {
        'fzs-sm': 'var(--fzs-shadow-sm)',
        'fzs-md': 'var(--fzs-shadow-md)',
        'fzs-lg': 'var(--fzs-shadow-lg)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.25,1,0.5,1) both',
      },
    },
  },
  plugins: [],
};
