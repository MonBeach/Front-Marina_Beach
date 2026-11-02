/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#EFF8F9',
          100: '#DBF0F2',
          200: '#BDE4E8',
          300: '#91D4DB',
          400: '#5FBDC8',
          500: '#26A4B2',
          600: '#1F8796',
          700: '#176D7B',
          800: '#155360',
          900: '#123A48',
        },
        cream: '#F5F8FA',
        charcoal: '#143369',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #26A4B2 0%, #1F8796 100%)',
      },
      boxShadow: {
        'soft-lg': '0 20px 60px -10px rgba(0,0,0,0.25)',
        card: '0 8px 30px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
