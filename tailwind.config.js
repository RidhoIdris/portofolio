module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        '100' : '70vh',
        '10p' : '10%',
        '20p' : '20%',
        '30p' : '30%',
        '40p' : '40%',
        '50p' : '50%',
        '60p' : '60%',
        '70p' : '70%',
        '80p' : '80%',
        '90p' : '90%',
        '100p' : '100%',
      },
      screens: {
        '-xl': {'max': '1279px'},  
        '-lg': {'max': '1023px'},  
        '-md': {'max': '767px'},  
        '-sm': {'max': '639px'},
        '-xs': {'max': '320px'},
      },
      colors:{
        'byu' : '#00bdf1',
        'dark-blue' : '#10163A',
        'light-blue' : '#232B57',
        'main-color' : '#7510f7',
        'landing1' : '#4f53f9',
        'blue-ribbon': {
          100: '#EDEEFE',
          200: '#D3D4FE',
          300: '#B9BAFD',
          400: '#8487FB',
          500: '#4F53F9',
          600: '#474BE0',
          700: '#2F3295',
          800: '#242570',
          900: '#18194B',
        },
      }
    },
  },
  variants: [
    'responsive', 
    // 'group-hover', 
    // 'group-focus', 
    // 'focus-within', 
    // 'first', 
    // 'last', 
    // 'odd', 
    // 'even', 
      'hover', 
      'focus', 
    // 'active', 
    // 'visited', 
    // 'disabled'
  ],
  plugins: [],
}

