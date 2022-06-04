module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        "primary": "#1a95fe",
        "primary-dark": "#0068a2"
      },
    },
  },
  plugins: [],
};