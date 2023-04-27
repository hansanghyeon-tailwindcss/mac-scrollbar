const plugin = require("tailwindcss/plugin")

module.exports = plugin(
	({ addComponents }) => {
    addComponents({
      '.mac-scrollbar': {
        '&::-webkit-scrollbar': {
          width: '6.4px',
          height: '6.4px'
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
          width: '6.4px',
          height: '6.4px'
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
          width: '6.4px',
          height: '6.4px'
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

      '.scrollbar-hide': {
        // /* For IE, Edge and Firefox */
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
        '&::-webkit-scrollbar': {
          /* For Webkit-based browsers (Chrome, Safari and Opera) */
          display: 'none',
        },
      },
    })
	},
	{},
)