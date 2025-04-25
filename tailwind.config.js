module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          light: '#D8D8F6',
          primary: '#B18FCF',
          neutral: '#978897',
          dark: '#494850',
          darker: '#2C2C34',
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'gradient': 'gradient 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  }
}

