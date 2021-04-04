module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-desktop': "url('../img/polygoBgHor.png')",
        'hero-mobile': "url('../img/polygoBgVer.png')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
