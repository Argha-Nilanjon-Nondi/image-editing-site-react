module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      "image-upload-sm":{"max":"240px"},
      "image-control-lg":{"max":"1110px"},
      "image-control-sm-a":{"min":"100px","max":"500px"},
      "image-control-sm":{"max":"387px"}
    },
    extend: {},
  },
  plugins: [],
}