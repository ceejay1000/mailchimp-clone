module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'bg-yellow-main': '#ffe01b',
        'btn-primary-color': '#007c89;'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
