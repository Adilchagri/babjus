/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babjus: {
          yellow: '#FFD900',
          yellowHover: '#F5CE00',
          yellowLight: '#FFF8D6',
          dark: '#0B100D',
          darkSurface: '#121914',
          forest: '#172018',
          forestLight: '#212E23',
          cream: '#F7F5EF',
          creamDark: '#EDE9DE',
          gold: '#B89520',
          sand: '#D8D1B8',
          accentGreen: '#1E7E34',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive', 'sans-serif'],
        arabic: ['"Tajawal"', '"Cairo"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 18px 45px rgba(0, 0, 0, 0.12)',
        'yellow-glow': '0 0 25px rgba(255, 217, 0, 0.35)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
}
