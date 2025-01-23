

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files : ['index.html']
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '5rem',
      }
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('taos/plugin')
  ],
  daisyui: {
    themes: ["night", "dark", "cyberpunk"],
  },
}

