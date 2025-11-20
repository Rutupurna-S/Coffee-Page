module.exports = {
  theme: {
    extend: {
      keyframes: {
        smoothbounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
      animation: {
        smoothbounce: "smoothbounce 1s infinite",
      },
    },
  },
};
