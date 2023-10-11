/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        bruno: ['"Bruno Ace"'],
        brunoAce: ['"Bruno Ace SC"']
      },
      backgroundColor: {
        activeNavbar: "#B53333"
      },
      textColor: {
        separetor: "#B53333"
      }
    },
  },
  plugins: [],
}

