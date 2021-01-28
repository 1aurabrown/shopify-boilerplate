const tailwindSpacing = require('./tailwind_custom/tailwind-spacing');

module.exports = {
  purge: {
    content: [
      'src/scripts/**/*.js',
      'src/**/*.liquid',
      'src/styles/**/*.css',
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
    inset: tailwindSpacing,
    transitionProperty: {
      'max-h': 'max-height',
      'opacity': 'opacity',
      'all': 'all',
    },
    gap: tailwindSpacing,
    spacing: tailwindSpacing,
    extend: {
      screens: {
        'hoverable': {'raw': '(hover: hover)'},
      },
      maxHeight: {
        '0': '0'
      },
      borderColor: {
        DEFAULT: 'currentColor'
      }
    }
  },
  corePlugins: {
    textTransform: false,
  }
}
