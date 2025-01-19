

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
    files : ['./docs/**/*.{html,js}']
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
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

