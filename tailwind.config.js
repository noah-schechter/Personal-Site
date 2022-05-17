module.exports = {
  darkMode: 'class',
  content: ["./public/index.html"],
  theme: {
    extend: {colors: {
      brown: '#2E2111',//from a darker shade of mushroom https://mushroomcoloratlas.com/mushroom/pisolithus_tinctorius
      white: '#FFF',
      green: '#585a33' //taken from mushroom https://mushroomcoloratlas.com/mushroom/polyozellus_atroazulinus 
    },
    fontFamily: {
      iosevka: ["IOSEVKA", "sans-serif"]
    }
    }
  },
  plugins: [],
}
