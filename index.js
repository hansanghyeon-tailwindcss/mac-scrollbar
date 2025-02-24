const plugin = require("tailwindcss/plugin")

module.exports = plugin(
	({ addComponents, addBase, matchUtilities, theme }) => {
    // 베이스스타일로 추가하기
    addBase({
      ':root': {
        // 스크롤바 배경색은 없는 것으로 추가하기
        // '--tw-mac-scrollbar-bg': '255, 255, 255',
        '--tw-mac-scrollbar-text': '12,12,12',
        '--tw-mac-scrollbar-size-w': '6.4px',
        '--tw-mac-scrollbar-size-h': '6.4px',
      },
      '@media (prefers-color-scheme: dark)': {
        ':root': {
          // '--tw-mac-scrollbar-bg': '255, 255, 255',
          '--tw-mac-scrollbar-text': '173, 186, 199',
        },
      },
    })

    // 전역 스크롤바 스타일 유틸리티
    addComponents({
      '.mac-scrollbar-all': {
        '*': {
          '&::-webkit-scrollbar': {
            width: 'var(--tw-mac-scrollbar-size-w, 6.4px)',
            height: 'var(--tw-mac-scrollbar-size-h, 6.4px)',
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar, &::-webkit-scrollbar-thumb': {
            overflow: 'visible',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(var(--tw-mac-scrollbar-text), 0.6)',
          },
        }
      },
      
      // 기본 mac-scrollbar 클래스
      '.mac-scrollbar': {
        '&::-webkit-scrollbar': {
          width: 'var(--tw-mac-scrollbar-size-w, 6.4px)',
          height: 'var(--tw-mac-scrollbar-size-h, 6.4px)',
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar, &::-webkit-scrollbar-thumb': {
          overflow: 'visible',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
        },
      },
      // 가로를 의도적으로 사용할때 애니메이션 추가
      '.mac-scrollbar-y': {
        position: 'relative',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: 'var(--tw-mac-scrollbar-size-w, 6.4px)',
          height: 'var(--tw-mac-scrollbar-size-h, 6.4px)'
        },
        '&::-webkit-scrollbar, &::-webkit-scrollbar-thumb': {
          overflow: 'visible',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
        },
        '&::after': {
          content: "''",
          position: 'absolute',
          backgroundColor: '#fff',
          height: '100%',
          top: '0',
          right: '0',
          width: '.4em',
          transition: 'all .5s',
          opacity: '1',
        },
        '&:hover::after': {
          opacity: '0',
          transition: 'all .5s',
        }
      },

      // 가로를 의도적으로 사용할때 애니메이션 추가
      '.mac-scrollbar-x': {
        position: 'relative',
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
          width: 'var(--tw-mac-scrollbar-size-w, 6.4px)',
          height: 'var(--tw-mac-scrollbar-size-h, 6.4px)'
        },
        '&::-webkit-scrollbar, &::-webkit-scrollbar-thumb': {
          overflow: 'visible',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
        },
        '&::after': {
          content: "''",
          position: 'absolute',
          backgroundColor: '#fff',
          width: '100%',
          bottom: '0',
          left: '0',
          height: '6.4px',
          transition: 'all .5s',
          opacity: '1',
        },
        '&:hover::after': {
          opacity: '0',
          transition: 'all .5s',
        }
      },
      '.scrollbar-hidden': {
        // /* For IE, Edge and Firefox */
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
        '&::-webkit-scrollbar': {
          /* For Webkit-based browsers (Chrome, Safari and Opera) */
          display: 'none',
        },
      },
    })

    // 색상 유틸리티
    matchUtilities(
      {
        'mac-scrollbar': (value) => ({
          '--tw-mac-scrollbar-color': value,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `var(--tw-mac-scrollbar-color, rgba(0,0,0,.1))`,
          },
        }),
      },
      {
        values: theme('colors'),
        type: ['color', 'any'],
      }
    );
	},
	{},
)