module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        red: '0px 4px 14px rgba(255, 0, 0, 0.5)',
      },
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
        // 'xs': {'min': '321px'},
      },
      colors:{
        'byu' : '#00bdf1',
        'dark-blue' : '#10163A',
        'light-blue' : '#232B57',
        'main-color' : '#7510f7',
        'landing1' : '#4f53f9',
        'royal-blue': {
          100: '#E9F1FF',
          200: '#C9DBFE',
          300: '#A8C6FD',
          400: '#679BFC',
          500: '#2670FA',
          600: '#2265E1',
          700: '#174396',
          800: '#113271',
          900: '#0B224B',
        },
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
        'gigas': {
          100: '#EDECF6',
          200: '#D2D0E8',
          300: '#B6B3DA',
          400: '#807ABE',
          500: '#4941A2',
          600: '#423B92',
          700: '#2C2761',
          800: '#211D49',
          900: '#161431',
        },
        'merah': {
          '100': '#FDF2F4',
          '200': '#F7C5CD',
          '300': '#F098A7',
          '400': '#EA6C81',
          '500': '#E43F5B',
          '600': '#D21E3C',
          '700': '#A5182F',
          '800': '#781122',
          '900': '#4C0B16'
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
  plugins: [
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__heartBeat','animate__pulse', 'animate__bounceIn','animate__slideInLeft','animate__slideInRight','animate__slideInDown','animate__slideInUp'],
      settings: {},
      variants: [],
    }),
  ],
}

