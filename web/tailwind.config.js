module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        dark: 'inset 0 0 0 5000px rgba(0, 0, 0, 0.1)',
        hover: 'inset 0 0 0 5000px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        brand: {
          light: '#50dbce',
          DEFAULT: '#1a535c',
          dark: '#123a40',
          translucent: '#1a545c55',
        },
        accent: {
          light: '#ffee99',
          DEFAULT: '#f5c00',
          dark: '#ccaa00',
          translucent: '#f5c00d55',
        },
        background: {
          light: '#707070',
          DEFAULT: '#333333',
          dark: '#141414',
          translucent: '#333333b8',
        },
        white: {
          DEFAULT: '#eaeaea',
          light: '#fafafa',
        },
      },
    },
  },
  variants: {
    extend: {
      borderCollapse: ['hover'],
      borderColor: ['hover'],
      borderOpacity: ['hover'],
      borderRadius: ['hover'],
      borderStyle: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}
