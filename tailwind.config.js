module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      dropShadow: {
        dark: "0 0 2em  #4d78cc",
      },
      colors: {
        dark: {
          bg1: "#21252b",
          bg2: "#282c34",
          bg3: "#2c313c",
          bg4: "#2b2f37",
          hover: "#414855",
          text: "#9da5b4",
          title: "#c3c0e3",
          active: "#4d78cc",
          red: "#FF3A20",
          green: "#32936F",
        },
      },
    },
  },
  plugins: [],
};
