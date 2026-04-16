/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#07080c',
          900: '#0b0d14',
          800: '#10131c',
          700: '#171b27',
          600: '#242a3a',
        },
        accent: {
          cyan: '#22d3ee',
          emerald: '#34d399',
          violet: '#a78bfa',
        },
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse at top, rgba(34,211,238,0.08), transparent 60%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.5)',
        'glow-violet': '0 0 40px -8px rgba(167,139,250,0.5)',
      },
    },
  },
  plugins: [],
}
