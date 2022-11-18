module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      visibility: ['hover', 'focus']
    },
    fontFamily: {

      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
