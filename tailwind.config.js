const tailwindSpacing = require('./tailwind_custom/tailwind-spacing');

module.exports = {
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.liquid'
    ]
  },
  theme: {
    borderOpacity: {
      '0': '0',
      '15': '.15',
      '25': '.25',
      '50': '.5',
      '85': '.85',
      '100': '1'
    },
    cursor: {
      'pointer': 'pointer'
    },
    opacity: {
      '0': '0',
      '15': '.15',
      '25': '.25',
      '50': '.5',
      '85': '.85',
      '100': '1',
    },
    transitionProperty: {
      'max-h': 'max-height',
      'opacity': 'opacity',
      'all': 'all',
    },
    extend: {
      inset: tailwindSpacing,
      gap: tailwindSpacing,
      spacing: tailwindSpacing,
      // If you change the breakpoints, don't forget to update breakpoints-tailwind.js
      screens: {
        'hoverable': {'raw': '(hover: hover)'},
        'xs-down': {'max' : '639px'},
        'sm-down': {'max': '767px'},
        'md-down': {'max': '1023px'}
      },
      maxHeight: {
        '0': '0'
      },
      borderColor: {
        DEFAULT: 'currentColor'
      }
    }
  },
  variants: {
    extend: {
      // ...
     fontFamily: ['hover', 'focus'],
    }
  },
}
