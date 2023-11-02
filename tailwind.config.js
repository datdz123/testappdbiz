module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        'green-bg': 'rgba(9, 182, 16, 0.15)',
        'green-button':'rgba(9, 182, 16, 0.80)',
      },
    },
  },
};
