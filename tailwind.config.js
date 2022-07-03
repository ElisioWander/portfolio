/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        goBack: {
          '0%': { transform: 'translateX(300px)' },
          '100%': { transform: 'traslateX(0)' }
        },
        goAhead: {
          '0%': { transform: 'translateX(-300px)' },
          '100%': { transform: 'traslateX(0)' }
        },
      },
      animation: {
        goBack: 'goBack 0.8s',
        goAhead: 'goAhead 0.8s',
      },
      colors: {
        purple: {
          100: "#9871F5"
        }
      }
    },
    fontFamily: {
      firasans: ["Fira Sans"]
    }
  },
  plugins: [],
}
