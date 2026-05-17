const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "@csstools/postcss-global-data": {
      files: ["./app/styles/breakpoints.css"],
    },
    "postcss-custom-media": {},
  },
};

export default config;
