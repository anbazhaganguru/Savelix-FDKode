/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        savelix: {
          lilac: '#F7F3FA',
          lavender: '#EDE5F4',
          'lavender-light': '#F2ECF7',
          purple: '#8065A8',
          'purple-hover': '#6C528F',
          plum: '#302B50',
          'plum-hover': '#25203F',
          grey: '#666477',
          border: '#E4DCEB',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', '"Baskervville"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        outfit: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        hero: '42px',
        pill: '999px',
      },
      screens: {
        'xs': '390px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px',
        '4k': '3840px',
      },
      spacing: {
        'desktop-section': '96px',
        'mobile-section': '56px',
      },
    },
  },
  plugins: [],
}
