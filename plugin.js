const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = plugin(function ({ addBase, addComponents, matchUtilities, theme }) {
  // Default design tokens
  addBase({
    ':root': {
      '--tw-mac-scrollbar-text': '12, 12, 12',
      '--tw-mac-scrollbar-size-w': '6.4px',
      '--tw-mac-scrollbar-size-h': '6.4px',
    },
    '@media (prefers-color-scheme: dark)': {
      ':root': {
        '--tw-mac-scrollbar-text': '173, 186, 199',
      },
    },
  })

  // Component styles
  addComponents({
    '.mac-scrollbar-all *': {
      '::-webkit-scrollbar': {
        width: 'var(--tw-mac-scrollbar-size-w, 6.4px)',
        height: 'var(--tw-mac-scrollbar-size-h, 6.4px)',
        'background-color': 'transparent',
        overflow: 'visible',
        'border-radius': '4px',
      },
      '::-webkit-scrollbar-thumb': {
        overflow: 'visible',
        'border-radius': '4px',
        'background-color': 'rgba(var(--tw-mac-scrollbar-text), 0.6)',
      },
    },

    '.mac-scrollbar': {
      'scrollbar-color':
        'var(--tw-mac-scrollbar-color, rgba(0, 0, 0, 0.1)) transparent',
      'scrollbar-width': 'thin',
      '::-webkit-scrollbar': {
        width: 'var(--tw-mac-scrollbar-size-w, 6.4px)',
        height: 'var(--tw-mac-scrollbar-size-h, 6.4px)',
        'background-color': 'transparent',
        overflow: 'visible',
        'border-radius': '4px',
      },
      '::-webkit-scrollbar-thumb': {
        overflow: 'visible',
        'border-radius': '4px',
        'background-color':
          'var(--tw-mac-scrollbar-color, rgba(0, 0, 0, 0.1))',
      },
    },

    '.mac-scrollbar-y': {
      position: 'relative',
      'overflow-y': 'scroll',
      'scrollbar-color':
        'var(--tw-mac-scrollbar-color, rgba(0, 0, 0, 0.1)) transparent',
      'scrollbar-width': 'thin',
      '::-webkit-scrollbar': {
        width: 'var(--tw-mac-scrollbar-size-w, 6.4px)',
        height: 'var(--tw-mac-scrollbar-size-h, 6.4px)',
        overflow: 'visible',
        'border-radius': '4px',
      },
      '::-webkit-scrollbar-thumb': {
        overflow: 'visible',
        'border-radius': '4px',
        'background-color':
          'var(--tw-mac-scrollbar-color, rgba(0, 0, 0, 0.1))',
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        'background-color': '#fff',
        height: '100%',
        top: 0,
        right: 0,
        width: '0.4em',
        transition: 'all 0.5s',
        opacity: '1',
      },
      '&:hover::after': {
        opacity: '0',
        transition: 'all 0.5s',
      },
    },

    '.mac-scrollbar-x': {
      position: 'relative',
      'overflow-x': 'auto',
      'scrollbar-color':
        'var(--tw-mac-scrollbar-color, rgba(0, 0, 0, 0.1)) transparent',
      'scrollbar-width': 'thin',
      '::-webkit-scrollbar': {
        width: 'var(--tw-mac-scrollbar-size-w, 6.4px)',
        height: 'var(--tw-mac-scrollbar-size-h, 6.4px)',
        overflow: 'visible',
        'border-radius': '4px',
      },
      '::-webkit-scrollbar-thumb': {
        overflow: 'visible',
        'border-radius': '4px',
        'background-color':
          'var(--tw-mac-scrollbar-color, rgba(0, 0, 0, 0.1))',
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        'background-color': '#fff',
        width: '100%',
        bottom: 0,
        left: 0,
        height: '6.4px',
        transition: 'all 0.5s',
        opacity: '1',
      },
      '&:hover::after': {
        opacity: '0',
        transition: 'all 0.5s',
      },
    },

    '.scrollbar-hidden': {
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',
      '::-webkit-scrollbar': {
        display: 'none',
      },
    },
  })

  // Dynamic utilities (arbitrary values supported)
  const colorValues = flattenColorPalette(theme('colors'))

  matchUtilities(
    {
      'mac-scrollbar-w': (value) => ({
        '--tw-mac-scrollbar-size-w': value,
      }),
      'mac-scrollbar-h': (value) => ({
        '--tw-mac-scrollbar-size-h': value,
      }),
      'mac-scrollbar-color': (value) => ({
        '--tw-mac-scrollbar-color': value,
      }),
    },
    {
      values: {
        ...colorValues,
      },
      type: 'any',
    }
  )
})
