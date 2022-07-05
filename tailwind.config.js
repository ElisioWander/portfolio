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
        goVisible: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' } 
        }
      },
      animation: {
        goBack: 'goBack 0.8s',
        goAhead: 'goAhead 0.8s',
        goVisible: 'goVisible 0.3s'
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
