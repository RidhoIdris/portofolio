module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        '100' : '70vh'
      },
      screens: {
        '-xl': {'max': '1279px'},  
        '-lg': {'max': '1023px'},  
        '-md': {'max': '767px'},  
        '-sm': {'max': '639px'}, 
      },
      colors:{
        'byu' : '#00bdf1',
        'dark-blue' : '#10163A',
        'light-blue' : '#232B57',
        'main-color' : '#7510f7'
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

